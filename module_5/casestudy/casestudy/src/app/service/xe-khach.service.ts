import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coach} from "../model/xe-khach";


@Injectable({
  providedIn: 'root'
})
export class CoachService {
  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Coach[]> {
    return this.http.get<Coach[]>('http://localhost:8080/api/coach');
  }

  findById(id: number): Observable<Coach> {
    return this.http.get<Coach>(`http://localhost:3000/Coachs/${id}`);
  }

  deleteCoach(id: number): Observable<Coach> {
    return this.http.delete<Coach>(`http://localhost:8080/api/coach/${id}`);
  }

  updateXe(id: number, coach: Coach): Observable<Coach> {
    return this.http.patch<Coach>(`http://localhost:3000/Coachs/${id}`, coach);
  }
}
