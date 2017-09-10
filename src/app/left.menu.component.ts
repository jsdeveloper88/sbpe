import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'left-menu',
  template: `
    <div class="left-menu">
      <a routerLink="/about" class="year-6me"> О сайте </a>
    </div>

    <div class="left-menu" *ngFor="let year of menu_6me">
      <a class="year-6me" (click)="toggle_year(year)"> {{year.year}} </a>

      <div *ngFor="let month of year.months; let month_ind = index" [ngClass]="{invisible: year.months_invisible}">
        <a class="month-6me" (click)="toggle_month(month)"> {{month.month}} </a>
        <!--<div class="month-6me" *ngIf="month_ind == 3">
         {{year.year}}
        </div>-->
        <div *ngFor="let podcast of month.podcasts" [ngClass]="{invisible: month.podcasts_invisible}">
          <a routerLink="/{{year.rubric}}/{{podcast.title.substring(podcast.title.length - 10, podcast.title.length)}}/{{podcast.route}}" class="podcast-6me"> {{podcast.title}} </a>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .left-menu {
      //width: 100%;
      margin: 1px 0;
    }
    .left-menu .year-6me {
      background-color: rgb(15, 190, 124);
      color: white;
      display: block;
      padding: 12px;
      text-decoration: none;
      //border: 1px solid black;
      margin: 1px 0;
      cursor: pointer;
      border-radius: 5px;
    }
    .left-menu .month-6me {
      background-color: #eee;
      color: black;
      display: block;
      padding: 12px;
      text-decoration: none;
      border: 1px solid rgb(15, 190, 124);
      margin: 1px 0;
      border-radius: 5px;
    }
    .left-menu .podcast-6me {
      background-color: white;
      color: black;
      display: block;
      padding: 12px;
      text-decoration: none;
      border: 1px solid rgb(15, 190, 124);
      margin: 1px 0;
      border-radius: 5px;
    }
    .left-menu a.month-6me:hover {
      background-color: #ccc;
    }
    .invisible {
      display: none;
    }
  `],
  providers: [ HttpService ]
})
export class LeftMenuComponent implements OnInit, AfterViewInit {
  menu_6me: any[];

  toggle_year(obj){
    obj.months_invisible = !obj.months_invisible;
    //alert('height---' + this.el.nativeElement.offsetHeight);
    if (obj.months_invisible) {
      for (let i = 0; i < obj.months.length; i++) {
        obj.months[i].podcasts_invisible = true;
      }
    }
  }

  toggle_month(obj){
    obj.podcasts_invisible = !obj.podcasts_invisible;
  }

  constructor(private httpService: HttpService, private el:ElementRef){}

  ngOnInit(){
    this.httpService.getData('assets/menu_6me.json').subscribe(
        data => {
          this.menu_6me = data;
        //alert('height---' + this.el.nativeElement.offsetHeight);
      }
    );
  }

  ngAfterViewInit(){
    //setTimeout(()=>{
      /*try{
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      }catch(e){
        console.error("LeftMenuComponent error");
      }*/
    //},500);
  }
}
