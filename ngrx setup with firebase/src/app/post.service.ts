// src/app/services/post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { Router } from '@angular/router';
import { Firestore, collection, collectionData } from '@angular/fire/firestore'; 
import { IBook } from './Ibook';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // JSONPlaceholder API URL

  constructor(private http: HttpClient,private fs:Firestore,
    private router: Router,
    // private afAuth: AngularFireAuth
    ){}

  // getPosts(): Observable<Post[]> {
  //   return this.http.get<Post[]>(this.apiUrl);
  // }
   
  getPosts():Observable<IBook[]>{
    let notesRef = collection(this.fs,'Books')
    return collectionData(notesRef,{idField:'id'}) as Observable<IBook[]>
  
  }
}
