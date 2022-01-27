import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OuserRoutingModule } from './ouser-routing.module';
import { OuserComponent } from './ouser.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import { HttpInterceptorProviders } from 'src/app/CORE';

@NgModule({
  imports: [
    CommonModule,
    OuserRoutingModule,
    SharedModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'})
  ],
  declarations: [OuserComponent],
  providers:[HttpInterceptorProviders]
})
export class OuserModule { }
