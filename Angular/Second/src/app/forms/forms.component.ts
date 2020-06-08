import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('Rob','rob@test.com',5556665566, '', 'morning', true);

  constructor() { }

  ngOnInit() {
  }

}
