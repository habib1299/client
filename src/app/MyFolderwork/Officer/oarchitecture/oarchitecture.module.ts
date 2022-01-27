import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OarchitectureRoutingModule } from './oarchitecture-routing.module';
import { OarchitectureComponent } from './oarchitecture.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import { HttpInterceptorProviders } from 'src/app/CORE';

@NgModule({
  imports: [
    CommonModule,
    OarchitectureRoutingModule,
    SharedModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'})
  ],
  declarations: [OarchitectureComponent],
  providers:[HttpInterceptorProviders]
})
export class OarchitectureModule { }
