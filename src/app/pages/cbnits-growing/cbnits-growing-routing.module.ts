import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CbnitsGrowingComponent } from './cbnits-growing.component';

const routes: Routes = [{
  path: '',
  component: CbnitsGrowingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CbnitsGrowingRoutingModule { }
