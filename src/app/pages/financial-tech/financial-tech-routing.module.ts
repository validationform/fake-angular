import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialTechComponent } from './financial-tech.component';

const routes: Routes = [{
  path: '',
  component: FinancialTechComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialTechRoutingModule { }
