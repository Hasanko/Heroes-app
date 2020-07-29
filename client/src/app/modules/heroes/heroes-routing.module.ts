import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { LayoutComponent } from 'src/app/shared/modules/layout/layout.component';


const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: '', component: HeroesListComponent},
    {path: 'new', component: HeroFormComponent},
    {path: 'edit/:id', component: HeroFormComponent},
    {path: ':id', component: HeroDetailsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
