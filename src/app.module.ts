import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { ApiModule } from './api/api.module';
import { DatabaseModule } from './database/database.module';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    CartModule,
    OrderModule,
    ApiModule,
    DatabaseModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
