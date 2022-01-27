import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppartementRoutingModule } from './appartement-routing.module';
import { AppartementComponent } from './appartement.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import { HttpInterceptorProviders } from 'src/app/CORE';

@NgModule({
  imports: [
    CommonModule,
    AppartementRoutingModule,
    SharedModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'})
  ],
  declarations: [AppartementComponent],
  providers:[HttpInterceptorProviders]
})
export class AppartementModule { }
