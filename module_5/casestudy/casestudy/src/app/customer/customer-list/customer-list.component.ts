import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../../model/customer/customer-type";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerTypes: CustomerType[];
  customers: Customer[];


  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(c => {
      this.customers = c;
    });
  }
}
