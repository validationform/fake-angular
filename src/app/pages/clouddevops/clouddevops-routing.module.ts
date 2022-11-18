import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClouddevopsComponent } from './clouddevops.component';

const routes: Routes = [
  {
    path: '',
    component: ClouddevopsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClouddevopsRoutingModule { }
