import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {SharedModule} from '../../../theme/shared/shared.module';
import { HttpInterceptorProviders } from 'src/app/CORE';
import { VerifypaymentuserComponent } from './verifypaymentuser.component';
import { VerifypaymentuserRoutingModule } from './verifypaymentuser-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:[VerifypaymentuserComponent],
  imports: [
    CommonModule,
    VerifypaymentuserRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[HttpInterceptorProviders]
})
export class VerifypaymentuserModule { }
