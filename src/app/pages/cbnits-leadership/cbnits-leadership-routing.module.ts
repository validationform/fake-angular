import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CbnitsLeadershipComponent } from './cbnits-leadership.component';

const routes: Routes = [{
  path: '',
  component: CbnitsLeadershipComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CbnitsLeadershipRoutingModule { }
