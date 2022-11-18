import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HadoopComponent } from './hadoop.component';

const routes: Routes = [
  {
    path: '',
    component: HadoopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HadoopRoutingModule { }
