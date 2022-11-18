import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigInnovationComponent } from './big-innovation.component';


const routes: Routes = [{
  path: '',
  component: BigInnovationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigInnovationRoutingModule { }
