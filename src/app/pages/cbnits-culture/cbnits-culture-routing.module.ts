import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CbnitsCultureComponent } from './cbnits-culture.component';

const routes: Routes = [{
  path: '',
  component: CbnitsCultureComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CbnitsCultureRoutingModule { }
