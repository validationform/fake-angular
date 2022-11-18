import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoonamBachkhediComponent } from './poonam-bachkhedi.component';

const routes: Routes = [
  {
    path: "",
    component: PoonamBachkhediComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoonamBachkhediRoutingModule { }
