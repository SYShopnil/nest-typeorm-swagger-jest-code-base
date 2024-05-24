/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/app')
  getUser(): string {
    return 'hello world this is from get user';
  }
}
