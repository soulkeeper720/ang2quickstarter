import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.components';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavbarComponent ],
  bootstrap:    [ AppComponent, NavbarComponent ]
})
export class AppModule { }
