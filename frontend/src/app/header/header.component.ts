import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  productLink : string = "Prodotti";
  contacts : string = "Contatti";
  about : string = "Chi siamo";
  register : string = "Registrati";
  login : string = "Login";
  controlPanel : string = "Pannello di controllo";

  constructor() {}

  ngOnInit(): void {
  }

}
