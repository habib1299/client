import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OarchitectureComponent } from './oarchitecture.component';
const routes: Routes = [
  {
    path: '',
    component: OarchitectureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OarchitectureRoutingModule { }
