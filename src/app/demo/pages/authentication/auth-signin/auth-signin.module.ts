import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthSigninRoutingModule } from './auth-signin-routing.module';
import { AuthSigninComponent } from './auth-signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorProviders } from 'src/app/CORE';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthSigninRoutingModule,
    HttpClientModule
  ],
  declarations: [AuthSigninComponent],
  providers:[HttpInterceptorProviders]
})
export class AuthSigninModule { }
