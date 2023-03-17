import {TypeOfCoach} from './type-of-coach';

export interface Coach {
  id?: number;
  code?: string;
  typeOfCoach?: TypeOfCoach;
  companyName?: string;
  departure?: string;
  destination?: string;
  phoneNumber: string;
  email: string;
  departureTime: string;
  arrivalTime: string;
}
