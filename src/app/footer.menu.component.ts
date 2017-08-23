import { Component, OnInit } from '@angular/core';

//import { HttpService } from './http.service';

@Component({
  selector: 'footer-menu',
  template: `
    <div class="footer">
      <div style=""> SBPE !!! © 2016-2017 </div>
    </div>
  `,
  styles: [`
    .footer {
      background-color: rgb(15, 190, 124);
      border-radius: 5px;
      text-align: left;
      color: white;
      width: 100%;
      float: left;
      padding: 7px;

      height: 50px;
      //margin: -2px 0 0 0;
    }

    .footer div {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      font-weight: bold;
    }
  `]
})
export class FooterMenuComponent{}
