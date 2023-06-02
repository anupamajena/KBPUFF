import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './BakeryAppComponent/header/header.component';
import { BodycomponentComponent } from './BakeryAppComponent/bodycomponent/bodycomponent.component';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent, BodycomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
