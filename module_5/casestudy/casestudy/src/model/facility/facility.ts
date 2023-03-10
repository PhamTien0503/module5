import {RentType} from './rent_type';
import {FacilityType} from './facility_type';


export interface Facility {
  id?: number;
  name?: string;
  img?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  rentType?: RentType;
  facilityType?: FacilityType;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  facilityFree?: string;
}
