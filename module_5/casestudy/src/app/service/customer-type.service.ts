import {Injectable} from '@angular/core';
import {CustomerType} from '../../model/customer/customer-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>('http://localhost:3000/customerTypes');
  }
}
