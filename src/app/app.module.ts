import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ConsolasModule } from './modules/consolas/consolas.module';
import { DevelopersModule } from './modules/developers/developers.module';
import { VideogameModule } from './modules/videogame/videogame.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConsolasModule,
    DevelopersModule,
    VideogameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
