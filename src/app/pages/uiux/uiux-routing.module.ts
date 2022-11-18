import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiuxComponent } from './uiux.component';

const routes: Routes = [
  {
    path: '',
    component: UiuxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiuxRoutingModule { }
