import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { HttpInterceptorProviders } from 'src/app/CORE';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[HttpInterceptorProviders]
})
export class UserModule { }
