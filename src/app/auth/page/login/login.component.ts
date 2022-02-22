import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i 
  form : FormGroup
  constructor(
     fb : FormBuilder,
     private auth:AuthService
  ) { 
    this.form = fb.group({
      emai: ['',[Validators.required,Validators.pattern(this.regexEmail)]],
      password:['',[Validators.required,Validators.min(2),Validators.max(10)]],
      checkRemember :[true]
    })
  }

  ngOnInit(): void {
  }
  login(){
    const value = this.form.value
    delete value.checkRemember
    this.auth.login(value).subscribe(console.log,console.warn)
  }
}
