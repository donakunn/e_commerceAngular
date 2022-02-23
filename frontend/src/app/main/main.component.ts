import { Component, OnInit } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  images : Array<string> = ["assets/img/dune.png","assets/img/drive-movie-poster-international-01.jpg",
  "assets/img/xmen.jpg"]
  constructor() { }

  ngOnInit(): void {
  }

}
