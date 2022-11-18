import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupKolkataComponent } from './startup-kolkata.component';

const routes: Routes = [{
  path: '',
  component: StartupKolkataComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartupKolkataRoutingModule { }

