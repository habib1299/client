import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfactureComponent } from './ofacture.component';
const routes: Routes = [
  {
    path: '',
    component: OfactureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfactureRoutingModule { }
