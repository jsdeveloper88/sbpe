import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import { HttpService } from './http.service';

@Component({
  selector: 'search_results',
  template: `
    <div style="border-radius: 5px; padding: 3px; min-height: 74vh; border: 1px solid rgb(15, 190, 124);">
      <div *ngIf="found_podcasts.length > 0; else emptyResp">
        <h3 style="margin: 5px 0;">Найденные подкасты</h3>
        <div *ngFor="let podcast of found_podcasts">
            <a href="{{podcast.rubric}}/{{podcast.title.substring(podcast.title.length - 10, podcast.title.length)}}/{{podcast.route}}">
              {{podcast.title.substring(0, podcast.ind)}}<strong>{{podcast.title.substring(podcast.ind, podcast.ind + podcast.len)}}</strong>{{podcast.title.substring(podcast.ind + podcast.len)}}
            </a>
        </div>
      </div>
      <br><br><br>
      <!-- search-ad-1 -->
      <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8645329394822741"
             data-ad-slot="7986301190"
             data-ad-format="auto">
      </ins>


      <ng-template #emptyResp>
        <br><br><br>
        <h2 style="margin: 5px 0;">К сожалению по вашему запросу ничего не нашлось !</h2>
      </ng-template>
    </div>
  `,
  providers: [ HttpService ]
})
export class SearchComponent implements OnInit, AfterViewInit {
  private querySubscription: Subscription;

  private req_words: string[];

  found_podcasts: any[] = [];

  constructor(private route: ActivatedRoute, private httpService: HttpService){}

  ngOnDestroy(){}

  ngOnInit() {
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.req_words = queryParam['req'].split(' ');

        this.httpService.getData('assets/menu_6me.json').subscribe(
          data => {
            this.found_podcasts = [];

            for (let j in data) {
              for (let k in data[j].months) {
                for (let l in data[j].months[k].podcasts) {
                  let found_title = data[j].months[k].podcasts[l].title;

                  for (let i in this.req_words) {
                    let coincidence_ind = found_title.toUpperCase().indexOf(this.req_words[i].toUpperCase());

                    if (coincidence_ind != -1) {
                      let in_found_podcasts = false;

                      for (let m of this.found_podcasts) {
                        if (m.title == found_title) {
                          in_found_podcasts = true;
                          break;
                        }
                      }

                      if (in_found_podcasts == false) {
                        this.found_podcasts.push({
                          'rubric': data[j].rubric,
                          'title': found_title,
                          'route': data[j].months[k].podcasts[l].route,
                          'ind': coincidence_ind,
                          'len': this.req_words[i].length
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        );
      }
    );
  }

  ngAfterViewInit() {
    //console.log(this.found_podcasts.length);
      try {
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      } catch(e) {
        console.error("SearchComponent error");
      }
  }
}
