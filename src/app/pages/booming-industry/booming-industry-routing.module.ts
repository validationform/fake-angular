import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoomingIndustryComponent } from './booming-industry.component';

const routes: Routes = [{
  path: '',
  component: BoomingIndustryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoomingIndustryRoutingModule { }
