import {Component, OnInit} from '@angular/core';
import {Film} from '../film';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {FilmService} from '../film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})

export class FilmDetailComponent implements OnInit {
  private ratingKeyword = 'rating-';

  film: Film | undefined;

  userRating = 0;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getFilm();
  }

  getFilm(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.filmService.getFilm(id)
      .subscribe(film => {
        this.film = film;
        this.getUserRating();
      });
  }

  saveUserRating(): void {
    localStorage.setItem(this.ratingKeyword + this.film?.id, String(this.userRating));
  }

  getUserRating(): void {
    this.userRating = Number(localStorage.getItem(this.ratingKeyword + this.film?.id));
  }

}
