import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coach} from '../model/xe-khach';
import {TypeOfCoach} from "../model/type-of-coach";



@Injectable({
  providedIn: 'root'
})
export class CoachService {
  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Coach[]> {
    return this.http.get<Coach[]>('http://localhost:8080/api/coach');
  }
  getAllTypeOfCoach(): Observable<TypeOfCoach[]> {
    return this.http.get<TypeOfCoach[]>('http://localhost:8080/api/coach/type');
  }

  findById(id: number): Observable<Coach> {
    return this.http.get<Coach>(`http://localhost:8080/api/coach/${id}`);
  }

  deleteCoach(id: number): Observable<Coach> {
    return this.http.delete<Coach>(`http://localhost:8080/api/coach/${id}`);
  }

  updateCoach(id: number, coach: Coach): Observable<Coach> {
    return this.http.patch<Coach>(`http://localhost:8080/api/coach/${id}`, coach);
  }
}
