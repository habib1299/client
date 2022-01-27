import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthSignupRoutingModule } from './auth-signup-routing.module';
import { AuthSignupComponent } from './auth-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorProviders } from 'src/app/CORE';
@NgModule({
  imports: [
    CommonModule,
    AuthSignupRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [AuthSignupComponent],
  providers:[HttpInterceptorProviders]
})
export class AuthSignupModule { }
