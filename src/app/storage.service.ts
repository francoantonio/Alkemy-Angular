import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getStore(key:string): string | null{
    const value = localStorage.getItem(key)
    return value? value: null
  }
  setStore(key:string,data:any){
    if (typeof data !== 'string'){
        data = JSON.stringify(data)
    }
    localStorage.setItem(key,data)
  }

  clearStore(key:string){
    localStorage.removeItem(key)
  }
}
