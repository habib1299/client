import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserinterfaceRoutingModule } from './userinterface-routing.module';
import { UserinterfaceComponent } from './userinterface.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserinterfaceRoutingModule,
    HttpClientModule,
    
  ],
  declarations: [UserinterfaceComponent]
})
export class UserinterfaceModule { }
