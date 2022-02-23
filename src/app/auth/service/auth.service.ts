import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth, ResponseAuth } from '../interface/auth';

@Injectable({
  providedIn: 'platform'
})
export class AuthService {
  url = environment.urlLogin
  constructor(
    private http:HttpClient
  ) { }

  login(body:Auth):Observable<ResponseAuth>{
    return this.http.post<ResponseAuth>(this.url,body)
  }
}
