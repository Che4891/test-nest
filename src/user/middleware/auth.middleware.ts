import { JWT_SECRET } from '@app/config';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserService } from '../user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: any, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }
    const token = req.headers.authorization.split(' ')[1];
    next();
    try {
      const decode = verify(token, JWT_SECRET);
      // const user = await this.userService.findById(decode.id);
      // req.user = user;
      console.log(decode);
    } catch (error) {
      req.user = null;
      next();
    }
  }
}
