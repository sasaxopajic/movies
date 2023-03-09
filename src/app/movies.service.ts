import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get('http://localhost:3000/categories');
  }

  getMovies() {
    return this.http.get('http://localhost:3000/movies');
  }

  getComments(){
    return this.http.get('http://localhost:3000/comments');
  }
}
