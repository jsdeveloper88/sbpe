import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left.menu.component';
import { RightMenuComponent } from './right.menu.component';

import { AboutComponent } from './about.component';
import { PodcastComponent } from './podcast.component';
import { PhraseComponent } from './phrase.component';
import { SearchComponent } from './search.component';

import { WordComponent } from './word.component';

const appRoutes: Routes = [
  //{ path: '', component: HomeComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  //{ path: '', component: AppComponent},
  { path: 'mobile_phones', redirectTo: '/6me/2008-06-04/mobile-phones', pathMatch: 'full'},

  { path: 'about', component: AboutComponent},
  //{ path: ':rubric/:date/:route', component: PodcastComponent},
  { path: ':rubric/:date/:route', component: PodcastComponent},
  { path: 'search', component: SearchComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    RightMenuComponent,
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
