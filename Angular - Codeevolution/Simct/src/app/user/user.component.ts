import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myUser : String = 'Sithija';
  auth = true;
  constructor() { }

  ngOnInit() {
  }

  loginMsg(value){
    console.log("hello"+ value);
  }
  sayHello(){
    console.log("hello dear");
  }
}
