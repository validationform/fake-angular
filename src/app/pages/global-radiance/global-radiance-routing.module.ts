import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalRadianceComponent } from './global-radiance.component';

const routes: Routes = [{
  path: "",
  component: GlobalRadianceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRadianceRoutingModule { }
