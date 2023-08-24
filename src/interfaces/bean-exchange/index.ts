import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BeanExchangeInterface {
  id?: string;
  bean_name: string;
  description?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BeanExchangeGetQueryInterface extends GetQueryInterface {
  id?: string;
  bean_name?: string;
  description?: string;
  user_id?: string;
}
