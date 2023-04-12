import { Injectable } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { Cart_items } from './database/entities/cart_items.entity';

@Injectable()
export class AppService {
  constructor() {
    this.testConnection();
  }
  getHello(): string {
    return 'Hello World!';
  }

  async testConnection() {
    try {
      await createConnection({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [Cart_items],
      });
  
      console.log('Database connection successful!');
    } catch (error) {
      console.error('Error connecting to database:', error);
    }
  }
  
}
