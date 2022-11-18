import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareSupportComponent } from './software-support.component';

const routes: Routes = [
  {
    path: '',
    component: SoftwareSupportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareSupportRoutingModule { }
