import { Component, OnInit } from '@angular/core';

//import { HttpService } from './http.service';

@Component({
  selector: 'app',
  template: `
    <div id="main">
        <header-menu style=""></header-menu>
        <search-menu style=""></search-menu>

        <left-menu style="margin: -1px 0 0 0; "></left-menu>
        <div class="podcast" style="padding: 0 3px 1px 3px;">
          <router-outlet></router-outlet>
        </div>
        <right-menu style="margin: -1px 0 0 0; "></right-menu>

        <footer-menu style=""></footer-menu>
    </div>
  `,
  styles: [`
    header-menu,
    search-menu,

    footer-menu {
        float: left;
        width: 100%;
    }

    @media only screen and (min-width: 320px) {
      left-menu,
      right-menu,
      .podcast {
        float: left;
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
