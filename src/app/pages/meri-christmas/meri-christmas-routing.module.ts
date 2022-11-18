import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeriChristmasComponent } from './meri-christmas.component';

const routes: Routes = [{
  path: '',
  component: MeriChristmasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeriChristmasRoutingModule { }
