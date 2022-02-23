import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Prodotto } from '../model/prodotto.model';

@Component({
  selector: 'singoloprodotto',
  templateUrl: './singoloprodotto.component.html',
  styleUrls: ['./singoloprodotto.component.css'],encapsulation: ViewEncapsulation.None,
})
export class SingoloprodottoComponent implements OnInit {

  @Input() prodotto : Prodotto;

  constructor() { }

  ngOnInit(): void {
  }

}
