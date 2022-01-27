import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OfactureRoutingModule } from './ofacture-routing.module';
import { OfactureComponent } from './ofacture.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    OfactureRoutingModule,
    SharedModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'})
  ],
  declarations: [OfactureComponent]
})
export class OfactureModule { }
