import { Injectable } from '@angular/core';
import { ICareerRequest, ICareerResponse } from '../../interfaces/career/career-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CareerService {



  private url = environment.BACKEND_URL;
  private api = { careers: `${this.url}/careers` };
  constructor(private http:HttpClient) { }


  getAll(): Observable<ICareerResponse[]> {
    return this.http.get<ICareerResponse[]>(this.api.careers);
  }
  getOne(id: number): Observable<ICareerResponse> {
    return this.http.get<ICareerResponse>(`${this.api.careers}/${id}`);
  }
  create(career: ICareerRequest): Observable<ICareerResponse> {
    return this.http.post<ICareerResponse>(this.api.careers, career);
  }

  update(career: ICareerRequest, id: number): Observable<ICareerResponse> {
    return this.http.patch<ICareerResponse>(`${this.api.careers}/${id}`, career);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.careers}/${id}`);
  }
}
