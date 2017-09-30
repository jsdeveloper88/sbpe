import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left.menu.component';
import { RightMenuComponent } from './right.menu.component';
import { SearchMenuComponent } from './search.menu.component';
import { HeaderMenuComponent } from './header.menu.component';
import { FooterMenuComponent } from './footer.menu.component';

import { AboutComponent } from './about.component';
import { PodcastComponent } from './podcast.component';
import { PhraseComponent } from './phrase.component';
import { SearchComponent } from './search.component';

import { WordComponent } from './word.component';

import { appRoutes } from './app.routes';



import { enableProdMode } from '@angular/core';
//enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    RightMenuComponent,
    SearchMenuComponent,
    HeaderMenuComponent,
    FooterMenuComponent,
    AboutComponent,
    PodcastComponent,
    PhraseComponent,
    SearchComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,

    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
