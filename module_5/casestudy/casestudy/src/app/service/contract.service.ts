import { Injectable } from '@angular/core';
import {CustomerService} from './customer.service';
import {FacilityService} from "./facility.service";
import {Contract} from "../../model/contract/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService) {
  }

  contracts: Contract[] = [{
    startDate: '2020-12-08', deposit: 0, customer: this.customerService.getAll()[1],
    facility: this.facilityService.getAll()[0], id: 1, endDate: '2020-12-11'
  },
    {
      id: 2, startDate: '2020-09-22', endDate: '2020-09-24', deposit: 1000000, customer: this.customerService.getAll()[2],
      facility: this.facilityService.getAll()[1]
    },
  ];

  getAll() {
    return this.contracts;
  }
}
