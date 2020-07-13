import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  userDetails: Object;

  constructor() { }

  ngOnInit() {
  }

}
