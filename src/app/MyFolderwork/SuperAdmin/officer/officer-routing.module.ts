import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OfficerComponent} from './officer.component';

const routes: Routes = [
  {
    path: '',
    component: OfficerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficerRoutingModule { }
