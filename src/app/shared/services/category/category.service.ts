
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICategoryRequest, ICategoryResponse } from '../../interfaces/category/category-interface';
import { CollectionReference, Firestore, addDoc, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import {  DocumentData, collection } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = environment.BACKEND_URL;
  private api = { categories: `${this.url}/categories` };
  // private categoryCollection!: CollectionReference <DocumentData>

  constructor( private http:HttpClient,
     ) {

     }

     getAll(): Observable<ICategoryResponse[]> {
      return this.http.get<ICategoryResponse[]>(this.api.categories);
    }
    create(category: ICategoryRequest): Observable<ICategoryResponse> {
      return this.http.post<ICategoryResponse>(this.api.categories, category);
    }
  
    update(category: ICategoryRequest, id: number): Observable<ICategoryResponse> {
      return this.http.patch<ICategoryResponse>(`${this.api.categories}/${id}`, category);
    }
  
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.api.categories}/${id}`);
    }



//   getAllFirebase() {
//     return collectionData(this.categoryCollection, {idField:'id'})
//   }
// createFirebase(category: ICategoryRequest){
//     return addDoc(this.categoryCollection,category);
//   }
//   updateFirebase(category: ICategoryRequest, id: string) {
//     const categoryDocumentReferens =doc(this.AngularFireStorage,`categories/${id}`);
//     return updateDoc(categoryDocumentReferens,{...category});
//   }
//   deleteFirebase(id: string) {
//     const categoryDocumentReferens =doc(this.AngularFireStorage,`categories/${id}`);
//     return deleteDoc(categoryDocumentReferens);
//   }
  
     }

  
