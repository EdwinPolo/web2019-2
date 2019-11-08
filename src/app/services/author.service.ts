import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(protected http:HttpClient) { }

  getAuthors() {
    return this.http.get('http://trainning.omarenco.com/api/author')
  }

  postAuthor(data) {
   return this.http.post('http://trainning.omarenco.com/api/author', data)
  }

}
