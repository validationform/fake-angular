import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CyberSecurityComponent } from './cyber-security.component';

const routes: Routes = [{
  path: '',
  component: CyberSecurityComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyberSecurityRoutingModule { }
