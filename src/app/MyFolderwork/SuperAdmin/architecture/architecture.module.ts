import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArchitectureRoutingModule } from './architcture-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';
import { ArchitectureComponent } from './architecture.component';
import { HttpInterceptorProviders } from 'src/app/CORE';

@NgModule({
  declarations:[ArchitectureComponent],
  imports: [
    CommonModule,
    ArchitectureRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[HttpInterceptorProviders]
})
export class ArchitectureModule { }
