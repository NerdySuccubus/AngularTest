import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email = "";
  password = "";
  submited = false;
  constructor(private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(){
    this.submited=true;
    if (this.loginForm.invalid) {
      //alert('El formato de mail o password son inválidos, la constraseña debe tener un mínimo de 8 caracteres.')
      return;
    }
    //alert('TODO BIEN');
  }


}
