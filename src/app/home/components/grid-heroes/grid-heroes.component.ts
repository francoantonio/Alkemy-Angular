import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-heroes',
  templateUrl: './grid-heroes.component.html',
  styleUrls: ['./grid-heroes.component.scss']
})
export class GridHeroesComponent implements OnInit {
  @Input()heroes!:any[]
  constructor() { }

  ngOnInit(): void {
  }

}
