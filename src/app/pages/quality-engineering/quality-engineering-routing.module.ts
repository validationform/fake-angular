import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualityEngineeringComponent } from './quality-engineering.component';

const routes: Routes = [
  {
    path: '',
    component: QualityEngineeringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityEngineeringRoutingModule { }
