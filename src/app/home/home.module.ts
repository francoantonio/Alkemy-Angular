import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeroeService } from './service/heroe.service';
import { GridHeroesComponent } from './components/grid-heroes/grid-heroes.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    GridHeroesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[HeroeService]
})
export class HomeModule { }
