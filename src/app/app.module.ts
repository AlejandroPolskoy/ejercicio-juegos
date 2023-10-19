import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { Game1PageComponent } from './pages/game1-page/game1-page.component';
import { Game1ImgComponent } from './game1-img/game1-img.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsSonComponent } from './albums-son/albums-son.component';
import { AlbumsFormComponent } from './albums-form/albums-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './pages/form/form.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { GameTresComponent } from './game-tres/game-tres.component';
import { Game3PageComponent } from './pages/game3-page/game3-page.component';
import { Game4PageComponent } from './pages/game4-page/game4-page.component';
import { Game4Component } from './game4/game4.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangePageComponent } from './pages/exchange-page/exchange-page.component';
import { GameWhackComponent } from './game-whack/game-whack.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    UsersPageComponent,
    Game1PageComponent,
    Game1ImgComponent,
    AlbumsComponent,
    AlbumsSonComponent,
    AlbumsFormComponent,
    AlbumPageComponent,
    FormComponent,
    PaginationComponent,
    AlbumDetailsComponent,
    GameTresComponent,
    Game3PageComponent,
    Game4PageComponent,
    Game4Component,
    ExchangeComponent,
    ExchangePageComponent,
    GameWhackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
