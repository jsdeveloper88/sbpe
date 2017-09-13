import { Component, OnInit } from '@angular/core';

//import { HttpService } from './http.service';

@Component({
  selector: 'header-menu',
  template: `
    <div class="header">
      <img class="header-logo" src="assets/img/favicon3.jpg">
      <div class="header-text">
        <span class="header-title" style="">SBPE with BBC Learning English !!!</span><br>
         <span class="header-description"  style="">Start Better Perceiving English with BBC 6 Minute: English, Grammar & Vocabulary !!!</span>
      </div>
    </div>
  `,
  styles: [`
    .header {
      background-color: rgb(15, 190, 124);
      color: white;
      width: 100%;
      //height: 20vh;
      border-radius: 5px;
      float: left;
    }
    .header > .header-logo {
      width: auto;
      //height: 90px;
      //height: 20vh;
      height: 100%;
      float: left;
      border-radius: 5px;
      //display: none;
    }
    .header > .header-logo:hover {
     transform: rotateY(1800deg);
     transition: transform 3s;
    }

    .header > .header-text {
      position: relative;
      top: 50%; transform:
      translateY(-50%);
    }

    @media only screen and (min-width: 320px) {
      .header {
        height: 170px;
      }
      .header > .header-text > .header-title {
        font-size: 1.1em;
        font-weight: bold;
      }
      .header > .header-text > .header-description {
       font-size: 0.8em;
      }
    }

    @media only screen and (min-width: 400px) {
     .header > .header-text > .header-title {
        font-size: 1.5em;
        font-weight: bold;
      }
      .header > .header-text > .header-description {
       font-size: 1em;
      }
    }

    @media only screen and (min-width: 470px) {
      .header {
        height: 120px;
      }
    }
  `]
})
export class HeaderMenuComponent{}
