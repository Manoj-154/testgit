import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  isVisible=true
  constructor() { }

  ngOnInit(): void {
  }

  changeView(){
    this.isVisible=false
  }

}
