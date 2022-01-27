import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureRoutingModule } from './facture-routing.module';

import {SharedModule} from '../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { FactureComponent } from './facture.component';
import { HttpInterceptorProviders } from 'src/app/CORE';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FactureRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbDropdownModule
  ],
  declarations: [FactureComponent],
  providers:[HttpInterceptorProviders]
})
export class FactureModule { }
