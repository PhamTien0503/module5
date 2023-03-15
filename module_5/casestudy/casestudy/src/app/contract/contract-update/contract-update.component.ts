import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../../model/customer/customer';
import {Facility} from '../../../model/facility/facility';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-contract-update',
  templateUrl: './contract-update.component.html',
  styleUrls: ['./contract-update.component.css']
})
export class ContractUpdateComponent implements OnInit {
  formContractUpdate: FormGroup;
  customers: Customer[];
  facilities: Facility[];

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.customers = this.customerService.getAll();
    this.facilities = this.facilityService.getAll();
    this.formContractUpdate = new FormGroup({
      id: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+$')]),
      facility: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required]),
    });
  }

  updateContract() {
  }
}

