import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CbnitsBronzeComponent } from './cbnits-bronze.component';

const routes: Routes = [{
  path: '',
  component: CbnitsBronzeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CbnitsBronzeRoutingModule { }
