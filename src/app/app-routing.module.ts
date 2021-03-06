import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmsComponent} from './films/films.component';
import {FilmDetailComponent} from './film-detail/film-detail.component';

const routes: Routes = [
  {path: 'films', component: FilmsComponent},
  {path: '', redirectTo: '/films', pathMatch: 'full'},
  {path: 'detail/:id', component: FilmDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
