import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import { HttpService } from './http.service';

@Component({
  selector: 'search_results',
  template: `
    <div style="/*border: 3px solid rgb(15, 190, 124); */border-radius: 5px; padding: 3px; min-height: 84vh;">
      <h3 style="margin: 5px 0;">Найденные подкасты</h3>
      <div *ngFor="let podcast of found_podcasts">
          <a href="{{podcast.rubric}}/{{podcast.title.substring(podcast.title.length - 10, podcast.title.length)}}/{{podcast.route}}"> {{podcast.title}} </a>
      </div>
    </div>
  `,
  providers: [ HttpService ]
})
export class SearchComponent implements OnInit {
  private querySubscription: Subscription;

  //private req_str: string;
  //private menu_6me: any[];

  private req_words: string[];

  found_podcasts: any[];

  constructor(private route: ActivatedRoute, private httpService: HttpService){}

  ngOnDestroy(){}

  ngOnInit() {
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.req_words = queryParam['req'].split(' ');
        //console.log(queryParam['req']);

        this.httpService.getData('assets/menu_6me.json').subscribe(
          data => {
            this.found_podcasts = [];
            for (let j in data) {
              //let obj = data[j];
              //obj.months = [];
              for (let k in data[j].months) {
                for (let l in data[j].months[k].podcasts) {
                  for (let i in this.req_words) {
                    if (data[j].months[k].podcasts[l].title.toUpperCase().indexOf(this.req_words[i].toUpperCase()) != -1) {
                      let in_found_podcasts = false;
                      for (let m of this.found_podcasts) {
                        if (m.title == data[j].months[k].podcasts[l].title) {
                          in_found_podcasts = true;
                          break;
                        }
                      }
                      if (in_found_podcasts == false) {
                        this.found_podcasts.push({
                          'rubric': data[j].rubric,
                          'title': data[j].months[k].podcasts[l].title,
                          'route': data[j].months[k].podcasts[l].route
                        });
                      }
                    }
                  }
                }
              }
            }
            //alert(JSON.stringify(this.found_podcasts));
          }
        );
      }
    );


  }
}
