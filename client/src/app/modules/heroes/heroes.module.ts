import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroesService } from './services/heroes.service';
import { LayoutModule } from 'src/app/shared/modules/layout/layout.module';
import { PaginationModule } from './../../shared/modules/pagination/pagination.module';

@NgModule({
  declarations: [HeroesListComponent, HeroFormComponent, HeroDetailsComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    PaginationModule
  ],
  providers: [HeroesService]
})
export class HeroesModule { }
