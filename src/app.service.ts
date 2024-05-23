import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly dataSource: DataSource) {}
  async onModuleInit() {
    if (this.dataSource.isInitialized) {
      console.log('Database connection established successfully!');
    } else {
      try {
        await this.dataSource.initialize();
        console.log('Database connection established successfully!');
      } catch (error) {
        console.error('Failed to establish database connection:', error);
      }
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
