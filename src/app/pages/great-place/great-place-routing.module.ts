import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreatPlaceComponent } from './great-place.component';

const routes: Routes = [{
  path: '',
  component: GreatPlaceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreatPlaceRoutingModule { }
