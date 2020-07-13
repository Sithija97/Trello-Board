import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  userDetails: Object;

  constructor(private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.userDetails = params.id );
  }

  ngOnInit() {
    this.data.getUser(this.userDetails).subscribe(
      data => this.userDetails = data 
    );
  }

}
