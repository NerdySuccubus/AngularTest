import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  email = "";
  password = "";
  submited = false;
  confirmedEmail = false;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      confirmemail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(){

    this.submited = true;
    if (this.signupForm.invalid) {
      //alert('El formato de mail o password son inválidos, la constraseña debe tener un mínimo de 8 caracteres.')
      return;
    }
    //alert('TODO BIEN');

    if (this.signupForm.controls.email.value == this.signupForm.controls.confirmemail.value){
      this.confirmedEmail = true;
    }

  }
}