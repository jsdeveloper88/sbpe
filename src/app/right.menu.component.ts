import { Component, OnInit } from '@angular/core';

//import { HttpService } from './http.service';

import { Router } from '@angular/router';

@Component({
  selector: 'right-menu',
  template: `
    <div style="background-color: rgb(15, 190, 124); padding: 7px; margin: 1px 0 3px 0; border-radius: 5px;">
      <div id="vk_groups" style=""></div>
    </div>
  `,
  styles: [``]
})
export class RightMenuComponent{}
