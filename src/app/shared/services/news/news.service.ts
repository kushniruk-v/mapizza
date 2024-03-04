import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { INewsRequest, INewsResponse } from '../../interfaces/news/news-interface';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = environment.BACKEND_URL;
  private api = { news: `${this.url}/news` };
  constructor(private http:HttpClient) { }

  getAll(): Observable<INewsResponse[]> {
    return this.http.get<INewsResponse[]>(this.api.news);
  }
  getOne(id: number): Observable<INewsResponse> {
    return this.http.get<INewsResponse>(`${this.api.news}/${id}`);
  }
  create(news: INewsRequest): Observable<INewsResponse> {
    return this.http.post<INewsResponse>(this.api.news, news);
  }

  update(news: INewsRequest, id: number): Observable<INewsResponse> {
    return this.http.patch<INewsResponse>(`${this.api.news}/${id}`, news);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.news}/${id}`);
  }
  resolve(route:ActivatedRouteSnapshot):Observable<INewsResponse>{
    return this.http.get<INewsResponse>(`${this.api.news}/${route.paramMap.get('id')}`);
   }

  // getAll(): Observable<INewsResponse[]> {
  //   return this.http.get<INewsResponse[]>(this.api.news);
  // }
  // getOne(id: number): Observable<INewsResponse> {
  //   return this.http.get<INewsResponse>(`${this.api.news}/${id}`);
  // }
  // create(news: INewsRequest): Observable<INewsResponse> {
  //   return this.http.post<INewsResponse>(this.api.news, news);
  // }

  // update(news:INewsRequest, id: number): Observable<INewsResponse> {
  //   return this.http.patch<INewsResponse>(`${this.api.news}/${id}`, news);
  // }
  // delete(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.api.news}/${id}`);
  // }
}
