import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OppartementComponent } from './oppartement.component';
const routes: Routes = [
  {
    path: '',
    component: OppartementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OappartementRoutingModule { }
