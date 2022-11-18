import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CbnitsComponent } from './cbnits.component';

const routes: Routes = [{
  path: '',
  component: CbnitsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CbnitsRoutingModule { }
