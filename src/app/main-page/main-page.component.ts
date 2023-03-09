import { Component, ViewChild } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogPostPageComponent } from '../blog-post-page/blog-post-page.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  @ViewChild(BlogPostPageComponent) movie: any;
  categories: any;
  movies: any;
  form: FormGroup;

  constructor(
    private service: MoviesService,
    fb: FormBuilder,
  ) {
    this.form = fb.group({
      filters: new FormArray([]),
    });
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe((res) => {
      this.categories = res;
    });

    this.service.getMovies().subscribe((res) => {
      this.movies = res;
    });
  }

  onCheckboxChange(event: any) {
    var filters = this.form.controls['filters'] as FormArray;
    if (event.target.checked) {
      filters.push(new FormControl(event.target.value));
    } else {
      const index = filters.controls.findIndex(
        (x) => x.value === event.target.value
      );
      filters.removeAt(index);
    }
  }

  /*applyFilters() {
    return this.form.value;
  }*/
}
