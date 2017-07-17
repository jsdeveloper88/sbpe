import { Component, Input } from '@angular/core';

@Component({
  selector: '[new-word]',
  template: `
    <td style="border: 1px solid rgb(15, 190, 124); border-radius: 5px; margin: 0; padding: 5px; width: 50%;">
      <span style="float: left; width: 75%; display: inline-block; line-height: 27px;">
        <span [ngClass]="{invisible: !en_invisible}">{{word.en_word}}</span>
      </span>
      <span style="float: left; width: 25%; display: inline-block;">
        <button (click)="hide_en_word()" class="bttn" [ngClass]="{invisible_bttn: !en_invisible}"> Скрыть </button>
        <button (click)="show_en_word()" class="bttn" [ngClass]="{invisible_bttn: en_invisible}"> Показать </button>
      </span>
    </td>
    <td style="border: 1px solid rgb(15, 190, 124); border-radius: 5px; margin: 0; padding: 5px;">
      <span style="float: left; width: 75%; display: inline-block; line-height: 27px;">
        <span [ngClass]="{invisible: !ru_invisible}">{{word.ru_word}}</span>
      </span>
      <span style="float: left; width: 25%; display: inline-block;">
        <button (click)="hide_ru_word()" class="bttn" [ngClass]="{invisible_bttn: !ru_invisible}"> Скрыть </button>
        <button (click)="show_ru_word()" class="bttn" [ngClass]="{invisible_bttn: ru_invisible}"> Показать </button>
      </span>
    </td>
  `,
  styles: [`
    .invisible {
      //display: none;
      visibility: hidden;
    }

    .invisible_bttn {
      display: none;
      //visibility: hidden;
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
  `]
})
export class WordComponent {
  @Input() word: any;

  en_invisible: boolean = true;
  ru_invisible: boolean = true;

  hide_en_word(){
    this.en_invisible = !this.en_invisible;
  }

  show_en_word(){
    this.en_invisible = !this.en_invisible;
  }

  hide_ru_word(){
    this.ru_invisible = !this.ru_invisible;
  }

  show_ru_word(){
    this.ru_invisible = !this.ru_invisible;
  }
}
