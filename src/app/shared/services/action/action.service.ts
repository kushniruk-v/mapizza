import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {
  Firestore,
  CollectionReference,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc, docData
} from "@angular/fire/firestore";
import { DocumentData, collection } from "@firebase/firestore";
import { IActionRequest, IActionResponse } from '../../interfaces/action/action-interface';
@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private url = environment.BACKEND_URL;
  private api = { actions: `${this.url}/actions`};
  // private actionCollection!: CollectionReference <DocumentData>;

  constructor(private http:HttpClient,
    ) {
    
     }

     getAll(): Observable<IActionResponse[]> {
      return this.http.get<IActionResponse[]>(this.api.actions);
    }
    getOne(id: number): Observable<IActionResponse> {
      return this.http.get<IActionResponse>(`${this.api.actions}/${id}`);
    }
    create(action: IActionRequest): Observable<IActionResponse> {
      return this.http.post<IActionResponse>(this.api.actions, action);
    }
  
    update(action: IActionRequest, id: number): Observable<IActionResponse> {
      return this.http.patch<IActionResponse>(`${this.api.actions}/${id}`, action);
    }
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.api.actions}/${id}`);
    }
    resolve(route:ActivatedRouteSnapshot):Observable<IActionResponse>{
      return this.http.get<IActionResponse>(`${this.api.actions}/${route.paramMap.get('id')}`);
     }

     

  //    getAllFirebase() {
  //     return collectionData(this.actionCollection, {idField:'id'})
   
  //   }
  //   getOneFirebase(id: string){
  //     const actionDocumentReferens =doc(this.AngularFireStorage,`actions/${id}`);
  //     return docData(actionDocumentReferens,{idField:'id'});
  //   }
  // createFirebase(action: IActionRequest){
  //     return addDoc(this.actionCollection,action);
  //   }
  //   updateFirebase(action: IActionRequest, id: string) {
  //     const actionDocumentReferens =doc(this.AngularFireStorage,`actions/${id}`);
  //     return updateDoc(actionDocumentReferens,{...action});
  //   }
  //   deleteFirebase(id: string) {
  //     const actionDocumentReferens =doc(this.AngularFireStorage,`actions/${id}`);
  //     return deleteDoc(actionDocumentReferens);
  //   }
}
