import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.css']
})
export class FlipComponent implements OnInit {

  isflip=true
  constructor() { }

  ngOnInit(): void {
  }
  changeView(){
    this.isflip=false;
  }

}
