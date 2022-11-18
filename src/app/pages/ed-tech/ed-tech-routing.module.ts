import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdTechComponent } from './ed-tech.component';

const routes: Routes = [
  {
    path: '',
    component: EdTechComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdTechRoutingModule { }
