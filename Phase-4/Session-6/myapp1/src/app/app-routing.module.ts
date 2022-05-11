import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  ///path to redirect

  {"path":"aboutus",component:AboutusComponent},
  {"path":"contactus",component:ContactusComponent},
  {"path":"home",component:PipedemoComponent},
  {"path":"user",component:UserComponent},
  {"path":"test",component:TestComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
