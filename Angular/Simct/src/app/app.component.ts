import { Component } from '@angular/core';
import { User } from './card/user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
  constructor(){
    this.user = new User();
    this.user.name = 'Sithija'
    this.user.title = 'SE'
    this.user.address = 'Arewwala'
  }
}
