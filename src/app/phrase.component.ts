import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'phrase',
  template: `
  <p class="name">{{name}}:</p>

  <div class="quote">
    <p *ngFor="let qt of quote" [innerHTML]="qt"></p>
    <button [ngClass]="{invisible: !invisible}" *ngIf="(translation.length == 1 && translation[0].length != 0) || translation.length > 1" (click)="toggle_translate()" class="show_translate"> Перевод </button>
  </div>

  <div class="translation" [ngClass]="{invisible: invisible}" *ngIf="(translation.length == 1 && translation[0].length != 0) || translation.length > 1">
    <p *ngFor="let trslt of translation" [innerHTML]="trslt"></p>
    <div><button (click)="toggle_translate()" class="hide_translate"> Скрыть </button></div>
  </div>

  <div style="background-color: yellow; padding: 5px; color: red; border-radius: 5px; text-align: center; font-weight: bold;" *ngIf="part_end">{{ part_end }}</div>

  <div style="padding: 5px;" *ngIf="ind == 9">
    <!-- podcast-ad-2 -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-8645329394822741"
         data-ad-slot="2102106045"
         data-ad-format="auto">
    </ins>
  </div>
  <div style="padding: 5px;" *ngIf="ind == 19">
    <!-- podcast-ad-3 -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-8645329394822741"
         data-ad-slot="5055572440"
         data-ad-format="auto">
    </ins>
  </div>
  <div style="padding: 5px;" *ngIf="ind == 29">
    <!-- podcast-ad-4 -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-8645329394822741"
         data-ad-slot="9766286727"
         data-ad-format="auto">
    </ins>
  </div>
  <div style="padding: 5px;" *ngIf="ind == 39">
    <!-- podcast-ad-5 -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-8645329394822741"
         data-ad-slot="4385310990"
         data-ad-format="auto">
    </ins>
  </div>
`,
  styles: [`
    .invisible {
      display: none;
    }

    .translation {
      background-color: rgb(15, 190, 124);
      color: white;
      padding: 5px;
      border-radius: 5px;
    }

    .translation p{
      display: inline-block;
      padding: 3px;
      margin: 0;
    }

    .name {
      display: block;
      font-weight: bold;
      margin: 5px 0 0 5px;
      padding: 5px 0 0 5px;
    }

    .quote {
      padding: 5px;
    }

    .quote p {
      display: block;
      padding: 5px;
      margin: 0;
    }

    .show_translate {
      background-color: rgb(15, 190, 124);
      padding: 5px 10px;
      color: white;
      //font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      border: none;
    }

    .hide_translate {
      background-color: rgb(15, 190, 124);
      padding: 5px 10px;
      color: white;
      //font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      border: 1px solid white;
    }
  `]
})
export class PhraseComponent implements AfterViewInit {
  @Input() name: string;
  @Input() quote: string;
  @Input() translation: string;
  @Input() part_end: string;

  @Input() ind: number;

  invisible: boolean = true;
  //bttn_visible: boolean = true;

  toggle_translate(){
    this.invisible = !this.invisible;
    //this.bttn_visible = !this.bttn_visible;
  }

  ngAfterViewInit() {
    //setTimeout(()=>{
      try{
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      }catch(e){
        console.error("PhraseComponent error");
      }
    //},500);
  }
}
