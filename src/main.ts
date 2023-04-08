import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { HttpStatus } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppService } from './app.service';

const port = process.env.PORT || 4000;
let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('CloudX Databases')
    .setDescription('The CloudX databases api documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}
bootstrap().then(() => {
  console.log('App is running on %s port', port);
});

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const appService = appContext.get(AppService);

  return {
    body: appService.getHello(),
    statusCode: HttpStatus.OK,
  };
};