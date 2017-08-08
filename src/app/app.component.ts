import { Component, OnInit } from '@angular/core';

//import { HttpService } from './http.service';

@Component({
  selector: 'app',
  template: `
    <div id="main">
      <div class="row">
        <div class="header-logo-up">
          <img src="assets/img/favicon3.jpg" style="width: auto; height: 100%; float: left;">
        </div>
        <div class="header-title">
          <img class="header-logo-left" src="assets/img/favicon3.jpg">
          <h2>SBPE with BBC Learning English !!!</h2>
          <h4>Start Better Perceiving English with BBC 6 Minute: English, Grammar & Vocabulary !!!</h4>
        </div>

        <div class="left-menu">
          <left-menu></left-menu>
        </div>
        <div class="podcast" style="padding: 5px;">
          <router-outlet></router-outlet>
        </div>
        <div class="right-menu" style="">
          <right-menu></right-menu>
        </div>

        <div class="footer">
          <h4 style="margin: 0; padding: 5px;">SBPE !!! © 2016-2017</h4>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .header-logo-up {
        width: 100%;
        //height: 90px;
        height: 10vh;
        background-color: rgb(15, 190, 124);
        float: left;
    }

    .header-title {
      background-color: rgb(15, 190, 124);
      color: white;
      width: 100%;
      border-radius: 5px;
      float: left;
    }
    .header-title > .header-logo-left {
      width: auto;
      //height: 90px;
      height: 10vh;
      float: left;
      border-radius: 5px;
      display: none;
    }
    .header-title > h2 {
      margin-bottom: 0;
      margin-left: 5px;
      margin-top: 0;
    }
    .header-title > h4{
      margin-top: 3px;
      margin-left: 5px;
      margin-bottom: 5px;
    }

    .left-menu,
    .right-menu,
    .podcast {
      width: 100%;
      float: left;
    }
    .podcast {
      height: 85vh;
    }

    .footer {
      background-color: rgb(15, 190, 124);
      border-radius: 5px;
      text-align: left;
      color: white;
      width: 100%;
      float: left;
      padding: 7px;

      height: 5vh;
    }

    #main {
      //min-height: 98vh;
      //min-height: 100vh;
      width: 100%;
      margin: 0 auto;
      border: 3px solid rgb(15, 190, 124);
      border-radius: 5px;
      padding: 3px;
    }

    @media only screen and (min-width: 555px) {
      .header-logo-up {
        display: none;
      }

      .header-title > .header-logo-left {
        display: block;
      }
      .header-title > h2 {
        margin-top: 11px;
      }
    }
    @media only screen and (min-width: 776px) {
      .header-title > h2 {
        margin-top: 21px;
      }

      .left-menu {
        width: 20%;
      }
      .podcast {
        width: 80%;
      }
      .right-menu {
        width: 100%;
      }
    }
    @media only screen and (min-width: 1320px) {
      .left-menu {
        width: 15%;
      }
      .podcast {
        width: 65%;
      }
      .right-menu {
        width: 20%;
      }
    }

    @media only screen and (min-width: 1550px) {
      #main {
        width: 60%;
      }
    }
  `]
})
export class AppComponent{}
