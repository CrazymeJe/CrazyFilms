import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Film} from './film';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private filmsUrl = 'api/films';

  constructor(
    private http: HttpClient
  ) {
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsUrl)
      .pipe(
        catchError(this.handleError<Film[]>('getFilms', []))
      );
  }

  getFilm(id: Number): Observable<Film> {
    const url = `${this.filmsUrl}/${id}`;
    return this.http.get<Film>(url).pipe(
      catchError(this.handleError<Film>(`getFilm title=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

  searchFilms(term: string): Observable<Film[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Film[]>(`${this.filmsUrl}/?title=${term}`).pipe(
      catchError(this.handleError<Film[]>('searchFilms', []))
    );
  }
}
