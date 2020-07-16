import { Component } from '@angular/core';
import { User } from './card/user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public message = "";
  public myInpt = "";
  public text = "Sithija Shehara"
  public name = "Nayana";
  constructor(){

  }
}
