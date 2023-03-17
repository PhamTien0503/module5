import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer/customer';
import {CustomerTypeService} from './customer-type.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private customerTypeService: CustomerTypeService,
              private http: HttpClient) {
  }

  customers: Customer[];

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customers');
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:3000/customers', customer);
  }

  updateCustomer(customer: Customer, id: number): Observable<Customer> {
    return this.http.patch<Customer>(`http://localhost:3000/customers/${id}`, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:3000/customers/${id}`);
  }
  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`http://localhost:3000/customers/${id}`);
  }

}
