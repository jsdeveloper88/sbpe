import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'phrase',
  template: `
  <div (window:resize)="onResize($event, ind)">
    <div style="padding: 5px;" *ngIf="ind == 0;">
      <!-- podcast-ad-1 -->
      <ins class="adsbygoogle podcast-ad"
           style="display:block"
           data-ad-client="ca-pub-8645329394822741"
           data-ad-slot="9794206882"
           data-ad-format="auto">
      </ins>
    </div>
    <div style="padding: 5px;" *ngIf="ind == 7;">
      <!-- podcast-ad-2 -->
      <ins class="adsbygoogle podcast-ad"
          style="display:block"
          data-ad-client="ca-pub-8645329394822741"
          data-ad-slot="2102106045"
          data-ad-format="auto">
      </ins>
    </div>
    <div style="padding: 5px;" *ngIf="ind == 14;">
      <!-- podcast-ad-3 -->
      <ins class="adsbygoogle podcast-ad"
           style="display:block"
           data-ad-client="ca-pub-8645329394822741"
           data-ad-slot="5055572440"
           data-ad-format="auto">
      </ins>
    </div>
    <div style="padding: 5px;" *ngIf="ind == 21;">
      <!-- podcast-ad-4 -->
      <ins class="adsbygoogle podcast-ad"
           style="display:block"
           data-ad-client="ca-pub-8645329394822741"
           data-ad-slot="9766286727"
           data-ad-format="auto">
      </ins>
    </div>
    <div style="padding: 5px;" *ngIf="ind == 28;">
      <!-- podcast-ad-5 -->
      <ins class="adsbygoogle podcast-ad"
           style="display:block"
           data-ad-client="ca-pub-8645329394822741"
           data-ad-slot="4385310990"
           data-ad-format="auto">
      </ins>
    </div>

    <p class="name">{{name}}:</p>

    <div class="quote">
      <p *ngFor="let qt of quote" [innerHTML]="qt"></p>
      <button [ngClass]="{invisible: !invisible}" *ngIf="(translation.length >= 1 && translation[0].length != 0)" (click)="toggle_translate()" class="show_translate"> Перевод </button>
    </div>

    <div class="translation" [ngClass]="{invisible: invisible}" *ngIf="(translation.length >= 1 && translation[0].length != 0)">
      <p *ngFor="let trslt of translation" [innerHTML]="trslt"></p>
      <button (click)="toggle_translate()" class="hide_translate"> Скрыть </button>
    </div>

    <div class="part_end" *ngIf="part_end">{{ part_end }}</div>
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
      display: block;
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
      cursor: pointer;
      border-radius: 5px;
      border: none;
    }

    .hide_translate {
      background-color: rgb(15, 190, 124);
      padding: 5px 10px;
      color: white;
      cursor: pointer;
      border-radius: 5px;
      border: 1px solid white;
    }

    .part_end {
      background-color: yellow;
      padding: 5px;
      color: red;
      border-radius: 5px;
      text-align: center;
      font-weight: bold;
      border: 1px dotted red;
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

  onResize(event, ind) {

    //if (ind == 0 || ind == 7 || ind == 14 || ind == 21 || ind == 28) {
      //(window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      //console.log(event.target.innerWidth, ind);
      this.ngAfterViewInit();
    //}
  }

  toggle_translate(){
    this.invisible = !this.invisible;
  }

  ngAfterViewInit() {
    try {
      if (this.ind == 0 || this.ind == 7 || this.ind == 14 || this.ind == 21 || this.ind == 28) {
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      }
    } catch(e) {
      console.error("PhraseComponent error");
    }
  }
}
