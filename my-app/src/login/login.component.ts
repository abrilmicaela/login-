import { Component } from '@angular/core';
import { AppComponent } from '../app/app.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AppComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {

  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      Email: new FormControl('', []),
      Password: new FormControl('', []),
    });
  }

  cargardatos() {
    console.log(this.reactiveForm.value);
  }
}





