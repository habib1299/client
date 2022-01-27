import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuserComponent } from './ouser.component';
const routes: Routes = [
  {
    path: '',
    component: OuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OuserRoutingModule { }
