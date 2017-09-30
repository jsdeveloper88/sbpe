import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'right-menu',
  template: `
    <div style="" class="right-menu">
      <div id="vk_groups" style=""></div>
    </div>
  `,
  styles: [`
    .right-menu {
      background-color: rgb(15, 190, 124);
      padding: 3px;
      margin: 1px 0 3px 0;
      border-radius: 5px;
    }
  `]
})
export class RightMenuComponent{}
