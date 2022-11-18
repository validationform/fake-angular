import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudDevelopmentComponent } from './cloud-development.component';

const routes: Routes = [
  {
    path: '',
    component: CloudDevelopmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudDevelopmentRoutingModule { }
