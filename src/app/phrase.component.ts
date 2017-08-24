import { Component, Input } from '@angular/core';

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
  <div style="padding: 5px;" *ngIf="ind == 8">
    <ins class="adsbygoogle"
      style="display:block; text-align:center;"
      data-ad-format="fluid"
      data-ad-layout="in-article"
      data-ad-client="ca-pub-8645329394822741"
      data-ad-slot="1652370281">
    </ins>
  </div>
  <div style="padding: 5px;" *ngIf="ind == 17">
    <ins class="adsbygoogle"
      style="display:block; text-align:center;"
      data-ad-format="fluid"
      data-ad-layout="in-article"
      data-ad-client="ca-pub-8645329394822741"
      data-ad-slot="3573269692">
    </ins>
  </div>
  <div style="padding: 5px;" *ngIf="ind == 26">
    <ins class="adsbygoogle"
      style="display:block; text-align:center;"
      data-ad-format="fluid"
      data-ad-layout="in-article"
      data-ad-client="ca-pub-8645329394822741"
      data-ad-slot="2360260374">
    </ins>
  </div>
  <div style="padding: 5px;" *ngIf="ind == 35">
    <ins class="adsbygoogle"
      style="display:block; text-align:center;"
      data-ad-format="fluid"
      data-ad-layout="in-article"
      data-ad-client="ca-pub-8645329394822741"
      data-ad-slot="3776627281">
    </ins>
  </div>
  <div style="padding: 5px;" *ngIf="ind == 44">
    <ins class="adsbygoogle"
      style="display:block; text-align:center;"
      data-ad-format="fluid"
      data-ad-layout="in-article"
      data-ad-client="ca-pub-8645329394822741"
      data-ad-slot="6952798425">
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
export class PhraseComponent {
  @Input() name: string;
  @Input() quote: string;
  @Input() translation: string;

  @Input() ind: number;

  invisible: boolean = true;
  //bttn_visible: boolean = true;

  toggle_translate(){
    this.invisible = !this.invisible;
    //this.bttn_visible = !this.bttn_visible;
  }
}
