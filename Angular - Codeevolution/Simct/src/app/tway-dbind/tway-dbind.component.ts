import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-tway-dbind',
  templateUrl: './tway-dbind.component.html',
  styleUrls: ['./tway-dbind.component.css']
})
export class TWayDBindComponent implements OnInit {

  //send data from child to root
  @Output() public childEvent = new EventEmitter();

  input : String = "";

  @Input()
  public parentData;
  @Input('myText') public scndText ;
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('this is from child component');
  }

}
