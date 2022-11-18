import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpactPandemicComponent } from './impact-pandemic.component';

const routes: Routes = [{
  path: '',
  component: ImpactPandemicComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpactPandemicRoutingModule { }
