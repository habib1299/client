import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OappartementRoutingModule } from './oappartement-routing.module';
import { OppartementComponent } from './oppartement.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import { HttpInterceptorProviders } from 'src/app/CORE';

@NgModule({
  imports: [
    CommonModule,
    OappartementRoutingModule,
    SharedModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'})
  ],
  declarations: [OppartementComponent],
  providers:[HttpInterceptorProviders]
})
export class OppartementModule { }
