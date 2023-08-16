import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DefaultColorOnEvenDirective } from './directives/color.directives';

@NgModule({
  declarations: [
    AppComponent,
    DefaultColorOnEvenDirective,
    EmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
