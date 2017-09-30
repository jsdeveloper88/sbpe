import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'search-menu',
  template: `
    <div class="search-menu">
        <input type="text" placeholder="Ключевые слова в названии подкаста" (keypress)="pressEnter($event)" [(ngModel)]="req_str">
        <button class="find_bttn" (click)="findPodcast()"> Найти </button>
    </div>
  `,
  styles: [`
    .search-menu {
      background-color: rgb(15, 190, 124);
      padding: 12px;
      margin: 1px 0;
      border-radius: 5px;
      //width: 100%;
      //box-sizing: border-box;
    }

    .find_bttn {
      display: inline-block;
      background-color: rgb(15, 190, 124);
      padding: 5px 5px;
      color: white;
      border-radius: 5px;
      border: 1px solid white;
      width: 55px;
    }
    input[type=text] {
      width: 70%;
      border-radius: 5px;
      font-size: 18px;
    }
  `
  ]
})
export class SearchMenuComponent implements OnInit {
  req_str: string;

  pressEnter(event){
    if (event.code == 'Enter') {
      if (this.req_str.trim().length != 0) {
        this.route.navigate(["/search"], {queryParams: {req: this.req_str}});
      } else {
        alert('Введите хотя бы часть одного из ключевых слов в названии подкаста !');
      }
    }
  }

  findPodcast(){
    this.route.navigate(["/search"], { queryParams: { req: this.req_str } });
  }

  constructor(private route: Router){}

  ngOnInit(){}
}
