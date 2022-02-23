import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i 
  form : FormGroup
  error : boolean = false
  constructor(
     fb : FormBuilder,
     private auth:AuthService,
     private store:StorageService,
     private router: Router
  ) { 
    this.form = fb.group({
      email: [this.store.getStore('email') || '',[Validators.required,Validators.pattern(this.regexEmail)]],
      password:['',[Validators.required,Validators.min(2),Validators.max(10)]],
      checkRemember :[true]
    })
  }

  ngOnInit(): void {

  }
  login(){
    const value = this.form.value

    value.checkRemember
      ?this.store.setStore('email',value.email)
      :this.store.clearStore('email')
    delete value.checkRemember
    this.auth.login(value).subscribe(
      {
        next: (response)=>this.succesResponse(response.token),
        error: ()=> this.showError()
      })
      
  }
  isError(nameControl:string){
    const control  = this.form.get(nameControl)
    return (control?.errors && !control.untouched)?true:false
  }
  succesResponse(token:string){
    this.saveToken(token)
    this.navigate('/')
  }
  saveToken(token:string){
    this.store.setStore('key',token)
  }
  navigate(url:string){
    this.router.navigateByUrl(url)
  }
  showError(){
    this.error = true
    setTimeout(() => {
      this.error = false
    }, 1500);
  }
}
