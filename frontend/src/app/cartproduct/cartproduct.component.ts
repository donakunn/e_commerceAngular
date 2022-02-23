import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from '../model/prodotto.model';

@Component({
  selector: 'cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css']
})
export class CartproductComponent implements OnInit {

  @Input() prodotto : Prodotto;
  constructor() { }

  ngOnInit(): void {
  }

}
