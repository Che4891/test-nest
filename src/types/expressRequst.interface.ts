import { UserEntity } from '@app/user/user.entity';
import Request from 'express';

export interface ExpressRequstinterface extends Request {
  user?: UserEntity;
}
