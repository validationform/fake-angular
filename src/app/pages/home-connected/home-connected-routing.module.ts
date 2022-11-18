import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeConnectedComponent } from './home-connected.component';

const routes: Routes = [{
  path: '',
  component: HomeConnectedComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeConnectedRoutingModule { }
