import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription, tap } from 'rxjs';
import { HeroeService } from '../../service/heroe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Heroes !: Observable<any>
  constructor(
    private heroe: HeroeService
  ) { }

  ngOnInit(): void {
  }

  bucador(value:string){
    this.Heroes = this.heroe.getHeroByName(value)
    .pipe(
      filter(response => response.response=='success'),
      map(response => response.results))
  }
}
