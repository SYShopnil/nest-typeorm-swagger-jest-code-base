/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class NotFoundMiddleware implements NestMiddleware {
  constructor(private reflector: Reflector) {}

  use(req: Request, res: Response, next: NextFunction) {
    const handler = this.reflector.get<string>('route', req.route);
    if (!handler) {
      res.status(404).json({ message: 'This API is Invalid' });
    } else {
      next();
    }
  }
}
