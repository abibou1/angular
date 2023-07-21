import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { NewemployeeService } from './services/newemployee.service';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewemployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NewemployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
