import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HelpComponent } from './pages/help/help.component';

import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {
    path : "",
    component :HomeComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact", // localhost:4200/contact
    component : ContactComponent
  },
  {
    path : "help",
    component : HelpComponent
  },
  {
    path : "**",
    component : ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
