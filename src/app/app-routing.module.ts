import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolasMainPageComponent } from './modules/consolas/consolas-main-page/consolas-main-page.component';
import { DevelopersMainPageComponent } from './modules/developers/developers-main-page/developers-main-page.component';
import { VideogameFormComponent } from './modules/videogame/videogame-main-page/components/videogame-form/videogame-form.component';
import { VideogameMainPageComponent } from './modules/videogame/videogame-main-page/videogame-main-page.component';
import { VideogameDetailsComponent } from './modules/videogame/videogame-details/videogame-details.component';
import { VideogameEditFormComponent } from './modules/videogame/videogame-main-page/components/videogame-edit-form/videogame-edit-form.component';

const routes: Routes = [
  { path: '', component: VideogameMainPageComponent },
  { path: 'desarrolladores', component: DevelopersMainPageComponent },
  { path: 'consolas', component: ConsolasMainPageComponent },
  { path: 'videojuego/agregar', component: VideogameFormComponent },
  { path: 'videojuego/:id', component: VideogameDetailsComponent },
  { path: 'videojuego/:id/editar', component: VideogameEditFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
