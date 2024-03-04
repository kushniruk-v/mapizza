import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../../interfaces/account/account-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private url = environment.BACKEND_URL;
  private api = { auth: `${this.url}/auth` };
  constructor( private http:HttpClient ) { }

  login(credential:ILogin):Observable<any>{
return this.http.get(`${this.api.auth}?email=${credential.email}& password=${credential.password}`)

  }
}
