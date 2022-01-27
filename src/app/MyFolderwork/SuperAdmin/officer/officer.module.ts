import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OfficerRoutingModule } from './officer-routing.module';
import { OfficerComponent } from './officer.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { HttpInterceptorProviders } from 'src/app/CORE';

@NgModule({
  declarations: [OfficerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    OfficerRoutingModule,
    SharedModule
  ],
  providers:[HttpInterceptorProviders]
})
export class OfficerModule { }
