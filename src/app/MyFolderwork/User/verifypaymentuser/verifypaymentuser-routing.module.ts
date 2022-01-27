import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifypaymentuserComponent } from './verifypaymentuser.component';

const routes: Routes = [
  {
    path: '', component: VerifypaymentuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifypaymentuserRoutingModule { }
