import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {

  operazione : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  cambiaVista(operazioneScelta : number): void {
    this.operazione = operazioneScelta;
  }
}
