import { Component, Input } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.scss'],
})
export class BlogPostPageComponent {
  movieId: any;
  movies: any;
  movie: any;
  comments: any;

  constructor(private service: MoviesService) {
    const [, , , , movieId, ...pathParams] = window.location.href.split('/');
    this.movieId = movieId;
  }
  ngOnInit(): void {
    this.service.getMovies().subscribe((res) => {
      this.movies = res;
      this.movie = this.movies[this.movieId - 1];
    });

    this.service.getComments().subscribe((res) => {
      this.comments = res;
    });
  }
}
