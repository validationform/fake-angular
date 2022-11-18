import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dynamic365Component } from './dynamic365.component';

const routes: Routes = [
  {
    path: '',
    component: Dynamic365Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dynamic365RoutingModule { }
