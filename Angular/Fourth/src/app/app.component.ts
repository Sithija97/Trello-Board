import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fourth';
  // registrationForm = new FormGroup({
  //   userName: new FormControl('defaultname'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  constructor(private fb:FormBuilder){}

  get userName() {
    return this.registrationForm.get('userName');
  }

  registrationForm = this.fb.group({
    userName:['', [Validators.required, Validators.minLength(5)]],
    password:[''], 
    confirmPassword:[''], 
    address: this.fb.group({
      city: [''],
      state:[''], 
      postalCode:[''] 
    })
  })

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