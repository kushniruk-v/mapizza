import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable,of } from 'rxjs';
import { TovaryService } from './tovary.service';
import { ITovaryResponse } from '../../interfaces/tovary/tovary-interface';

@Injectable({
  providedIn: 'root'
})
export class TovaryInfoResolver implements Resolve<ITovaryResponse>  {
 
  constructor(private TovaryService:TovaryService ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITovaryResponse> {
    return this.TovaryService.getOne(Number(route.paramMap.get('id'))); 
  }
}
