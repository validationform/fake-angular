import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HireusComponent } from './hireus.component';

const routes: Routes = [
  {
    path: '',
    component: HireusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireusRoutingModule { }
