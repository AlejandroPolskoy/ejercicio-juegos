import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { Game1PageComponent } from './pages/game1-page/game1-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { Game3PageComponent } from './pages/game3-page/game3-page.component';
import { Game4Component } from './game4/game4.component';
import { Game4PageComponent } from './pages/game4-page/game4-page.component';
import { ExchangePageComponent } from './pages/exchange-page/exchange-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'contact', component: ContactPageComponent
  },
  {
    path: 'users', component: UsersPageComponent
  },
  {
    path: 'game1', component: Game1PageComponent
  },
  {
    path: 'game3', component: Game3PageComponent
  },
  {
    path: 'game4', component: Game4PageComponent
  },
  {
    path: 'albums', component: AlbumPageComponent
  },
  {
    path: 'albums/:id', component: AlbumDetailsComponent
  },
  {
    path: 'exchange/:base', component: ExchangePageComponent
  },
  {
    path: 'exchange', component: ExchangePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
