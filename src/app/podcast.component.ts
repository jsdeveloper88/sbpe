import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import { HttpService } from './http.service';
import { PhraseComponent } from './phrase.component';
import { WordComponent } from './word.component';

@Component({
    selector: 'podcast',
    template:`
    <div id = "podcast" style="border-radius: 5px; padding: 3px; float: left; min-height: 74vh;/*border: 1px solid rgb(15, 190, 124); margin: -9px 0 1px 0;*/">
      <h3 style="margin: 5px 0;">{{title}}</h3>

      <img src="{{img_addr}}" style="margin: 5px auto 5px auto; display: block; border-radius: 5px; width: 75%;">

      <div align="center" style="margin: 5px auto 5px auto; border-radius: 5px; border: 1px solid rgb(15, 190, 124); padding: 0;">
	      <audio controls [src]="audio_src" style="width: 100%;"></audio>
	    </div>

	    <!-- podcast-ad-2 -->
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-8645329394822741"
           data-ad-slot="2102106045"
           data-ad-format="auto">
      </ins>


	    <table style="margin: 5px auto 5px auto; width: 100%;">
	      <tr>
	        <td colspan="2" style="background-color: rgb(15, 190, 124); border-radius: 5px; color: white; padding: 5px;">
            <span style="float: left; width: 85%; display: inline-block; text-align: center; vertical-align: bottom; line-height: 27px; font-weight: bold;"> Новые слова для вашего словарного запаса </span>
              <span style="float: left; width: 15%; display: inline-block;">
                <button (click)="hide_new_words()" class="bttn" [ngClass]="{invisible: new_word_invisible}"> Скрыть </button>
                <button (click)="show_new_words()" class="bttn" [ngClass]="{invisible: !new_word_invisible}"> Показать </button>
              </span>
          </td>
	      </tr>
	      <tr new-word [word]="new_word" *ngFor="let new_word of words_arr" [ngClass]="{invisible: new_word_invisible}">
	      </tr>
	    </table>

      <div *ngFor="let phrase of phrases_arr; let ind = index">
        <phrase [name]="phrase.name" [quote]="phrase.quote" [translation]="phrase.translation" [part_end]="phrase.part_end" [ind]="ind"></phrase>

      </div>
    </div>
    `,
    styles: [`
      .invisible {
        display: none;
      }

      .bttn {
        background-color: rgb(15, 190, 124);
        padding: 5px 5px;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid white;
        float: right;
      }
    `],
    providers: [ HttpService ]
})
export class PodcastComponent implements OnInit, AfterViewInit {
  new_word_invisible: boolean = true;

  private subscription: Subscription;

  private route: string;
  private date: string;
  private rubric: string;

  title: string;
  img_addr: string;
  audio_src: string;
  words_arr: any[];

  phrases_arr: any[];

  hide_new_words(){
    this.new_word_invisible = !this.new_word_invisible;
  }

  show_new_words(){
    this.new_word_invisible = !this.new_word_invisible;
  }

  constructor(private activateRoute: ActivatedRoute, private httpService: HttpService){
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit(){
    this.subscription = this.activateRoute.params.subscribe(
        params => {
          this.route = params['route'];
          this.date = params['date'];
          this.rubric = params['rubric'];

          this.httpService.getData('assets/' + this.rubric + '/' + this.date.substr(0,4) + '/' + this.date.substr(0,7) + '/' + this.route + '.json').subscribe(
            data => {
                //console.log(data);
                this.title = data.title;
                this.img_addr = 'assets/' + data.img_addr;
                this.audio_src = 'assets/' + data.audio_src;
                this.words_arr = data.words_arr;

                for (let i = 0; i < data.phrases_arr.length; i++) {
                  if(typeof data.phrases_arr[i].quote == 'string') {
                    let temp_str = data.phrases_arr[i].quote;
                    data.phrases_arr[i].quote = [];
                    data.phrases_arr[i].quote.push(temp_str);
                  }
                  if(typeof data.phrases_arr[i].translation == 'string') {
                    let temp_str = data.phrases_arr[i].translation;
                    data.phrases_arr[i].translation = [];
                    data.phrases_arr[i].translation.push(temp_str);
                  }
                }
                this.phrases_arr = data.phrases_arr;
            }
          );
        });
  }

  ngAfterViewInit() {
    //setTimeout(()=>{
      try{
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      }catch(e){
        console.error("PodcastComponent error");
      }
    //},500);
  }
}
