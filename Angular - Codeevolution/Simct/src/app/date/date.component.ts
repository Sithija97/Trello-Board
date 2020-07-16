import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  myMessage : String = "Hello Sithija";
  message : String ; 
  user : any;

  @Input('name')
  userName : string;
  
  constructor() {
 
    setInterval(()=>{
      let curentDate = new Date();
      this.message = curentDate.toDateString() + ' '+' '+curentDate.toLocaleTimeString();},1000);
  }

  ngOnInit() {

    this.user = {
      name:this.userName,
      title:'Software Engineer',
      address:'513/1E, Pasan mw, Arewwala'
    }
  }

}
