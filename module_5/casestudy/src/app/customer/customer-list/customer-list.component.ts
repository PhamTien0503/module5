import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../../model/customer/customer-type';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  formSearch: FormGroup;
  customers: Customer[];
  p = 1;
  idDelete: number;
  nameDelete: string;
  customerTypes: CustomerType[] = [];


  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getCustomerType();
    this.formSearch = new FormGroup(
      {
        nameSearch: new FormControl(''),
        customerTypeName: new FormControl('')
      });
  }

  getCustomerType() {
    this.customerTypeService.getAll().subscribe(ct => {
      this.customerTypes = ct;
    });
  }

  getAll() {
    this.customerService.getAll().subscribe(c => {
      this.customers = c;
    });
  }

  openModal(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idDelete).subscribe(next => {
      this.getAll();
      this.router.navigateByUrl('/customer');
    });
  }

  searchCustomer() {

  }
}
