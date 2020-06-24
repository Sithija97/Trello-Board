import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fourth';
  registrationForm = new FormGroup({
    userName: new FormControl('defaultname'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  loadApiData() {
    this.registrationForm.setValue({
      userName: 'Sithija',
      password: '123',
      confirmPassword: '123',
      address: {
        city: 'Maharagama',
        state: 'arewwala',
        postalCode: '32350'
      }
    });

  }
}