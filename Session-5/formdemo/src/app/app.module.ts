import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeColorDirective } from './ChangeColorDirective';
import { HighlightDirective } from './HighlightDirective';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ChangeColorDirective,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
