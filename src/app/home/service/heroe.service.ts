import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  urlBase = environment.urlApi + environment.tokenApi + '/'
  constructor(
    private http:HttpClient
  ) { }

  getHeroByName(name:string){
    const url = `${this.urlBase}search/${name}`
    return this.http.get<any>(url)
  }
  getConnectionsHeroeById(id:number){
    const url = `${this.urlBase}${id}/connections`
    return this.http.get(url)
  }
  getWorkHeroeById(id:number){
    const url = `${this.urlBase}${id}/work`
    return this.http.get(url)
  }

  getAppearanceHeroeById(id:number){
    const url= `${this.urlBase}${id}/appearance`
    this.http.get(url)
  }
}
