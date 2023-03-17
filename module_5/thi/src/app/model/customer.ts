import {CustomerType} from './customer-type';
export interface Customer {
  id?: string;
  name?: string;
  dateOfBirth?: string;
  gender?: boolean;
  salary?: number;
  customerType?: CustomerType;
}
