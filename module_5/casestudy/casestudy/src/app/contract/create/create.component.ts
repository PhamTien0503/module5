import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Facility} from "../../../model/facility/facility";
import {Customer} from "../../../model/customer/customer";
import {CustomerService} from "../../service/customer.service";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formContractCreate: FormGroup;
  customers: Customer[];
  facilities: Facility[];

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.customers = this.customerService.getAll();
    this.facilities = this.facilityService.getAll();
    this.formContractCreate = new FormGroup({
      id: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+$')]),
      facility: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required]),
    });
  }


  saveContract() {

  }
}
