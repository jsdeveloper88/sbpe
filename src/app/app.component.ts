import { Component, OnInit } from '@angular/core';

//import { HttpService } from './http.service';

@Component({
  selector: 'app',
  template: `
    <div id="main">
      <!--<div class="row">-->
        <!--<div class="header">
          <img class="header-logo" src="assets/img/favicon3.jpg">
          <div class="header-text">
            <span class="header-title" style="">SBPE with BBC Learning English !!!</span><br>
            <span class="header-description"  style="">Start Better Perceiving English with BBC 6 Minute: English, Grammar & Vocabulary !!!</span>
          </div>
        </div>-->
        <header-menu style=""></header-menu>
        <search-menu></search-menu>

        <left-menu style="margin: -1px 0 0 0; float: left;"></left-menu>

        <div class="podcast" style="padding: 1px; float: left;">
          <router-outlet></router-outlet>
        </div>
        <!--<div class="right-menu" style="">-->
          <right-menu style="float: left;"></right-menu>
        <!--</div>-->

        <!--<div class="footer">
          <div style="position: relative; top: 50%; transform: translateY(-50%); font-weight: bold;"> SBPE !!! © 2016-2017 </div>
        </div>-->
        <footer-menu></footer-menu>
      <!--</div>-->
    </div>
  `,
  styles: [`
    @media only screen and (min-width: 320px) {
      left-menu,
      right-menu,
      .podcast
      {
        width: 100%;
      }
    }

    @media only screen and (min-width: 900px) {
      left-menu {
        width: 20%;
      }
      .podcast {
        width: 80%;
      }
    }

    @media only screen and (min-width: 1200px) {
      left-menu {
        width: 20%;
      }
      .podcast {
        width: 55%;
      }
      right-menu {
        width: 25%;
      }
      #main {
        width: 1185px;
      }
    }

    #main {
      //min-height: 98vh;
      //min-height: 100vh;
      //width: 100%;
      background-color: white;
      margin: 0 auto;
      border: 1px solid rgb(15, 190, 124);
      border-radius: 5px;
      padding: 3px;
    }

    #main::after {
      content: "";
      clear: both;
      display: block;
    }
  `]
})
export class AppComponent{}
