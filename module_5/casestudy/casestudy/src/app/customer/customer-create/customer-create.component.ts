import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../../model/customer/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerTypes: CustomerType[] = [];
  customerFormCreate: FormGroup;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getCustomerType();
    this.customerFormCreate = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      idCard: new FormControl('', [Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^(([(]84[)][+]91)|([(]84[)][+]90)|090|091)[0-9]{7}$')]),
      email: new FormControl('', Validators.email),
      address: new FormControl('', Validators.required),
      customerType: new FormControl(this.customerTypes)
    });
  }

  // id?: number;
  // customerType?: CustomerType;
  // name?: string;
  // dateOfBirth?: string;
  // gender?: boolean;
  // idCard?: string;
  // phoneNumber?: string;
  // email?: string;
  // address?: string;

  getCustomerType() {
    this.customerTypes = this.customerTypeService.getAll();
  }

  saveCustomer() {
    this.customerService.saveCustomer(this.customerFormCreate.value);
  }
}
