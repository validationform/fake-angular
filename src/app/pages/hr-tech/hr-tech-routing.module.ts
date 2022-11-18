import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrTechComponent } from './hr-tech.component';

const routes: Routes = [
  {
    path: '',
    component: HrTechComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrTechRoutingModule { }
