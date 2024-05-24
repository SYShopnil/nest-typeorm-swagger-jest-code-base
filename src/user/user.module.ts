import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  // eslint-disable-next-line prettier/prettier
  controllers: [UserController],
})
export class UserModule {}
