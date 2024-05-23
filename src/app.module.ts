import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { dataSourceOption } from './database/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOption), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// "migration:generate": "npm run typeorm -- migration:generate",
