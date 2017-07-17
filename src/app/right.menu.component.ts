import { Component, OnInit } from '@angular/core';

//import { HttpService } from './http.service';

import { Router } from '@angular/router';

@Component({
  selector: 'right-menu',
  template: `
    <div style="background-color: rgb(15, 190, 124); padding: 12px; margin: 1px 0; border-radius: 5px; margin: 3px 0;">
        <input type="text" placeholder="Найти подкаст" (keypress)="pressEnter($event)" [(ngModel)]="req_str">
        <!--<button class="find_bttn" (click)="findPodcast()"> Найти </button>
        <a routerLink="/search" [queryParams]="{'req': req_str}"> Найти </a>-->
    </div>
    <div style="background-color: rgb(15, 190, 124); padding: 7px; margin: 1px 0 3px 0; border-radius: 5px;">
      <!-- VK Widget -->
      <div id="vk_groups" style=""></div>
    </div>
  `,
  styles: [`
    .find_bttn {
      display: inline-block;
      background-color: rgb(15, 190, 124);
      padding: 5px 5px;
      color: white;
      border-radius: 5px;
      border: 1px solid white;
      width: 55px;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out;
    }
    input[type=text] {
      width: 60%;
      border-radius: 5px;
      font-size: 18px;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out;
    }

    input[type=text]:focus {
      width: 100%;
    }
  `
  ]
})
export class RightMenuComponent implements OnInit {

  req_str: string;

  pressEnter(event){
    if (event.code == 'Enter') {
      this.route.navigate(["search"], { queryParams: { req: this.req_str } });
    }
  }

  /*findPodcast(){
    this.route.navigate(["/search"], { queryParams: { req: this.req_str } });
  }*/

  constructor(private route: Router){}

  ngOnInit(){}
}
