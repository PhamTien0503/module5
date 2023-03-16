import {Injectable} from '@angular/core';
import {CustomerType} from '../../model/customer/customer-type';
import {Customer} from '../../model/customer/customer';
import {CustomerTypeService} from './customer-type.service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private customerTypeService: CustomerTypeService,
              private http: HttpClient) {
  }

  customers: Customer[];

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('  http://localhost:3000/customers');
  }

  saveCustomer(customer: Customer) {
    this.customers.push(customer);
  }
}
