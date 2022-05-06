import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipe } from './custompipe';
import { PipedemoComponent } from './pipedemo/pipedemo.component';

@NgModule({
  declarations: [
    AppComponent,
    PipedemoComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
