import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('user')
  user : User;
  constructor() { }

  ngOnInit() {
    this.user.name;
    this.user.title;
    this.user.address;
  }

}
