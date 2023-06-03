import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './BakeryAppComponent/header/header.component';
import { BodycomponentComponent } from './BakeryAppComponent/bodycomponent/bodycomponent.component';
import { ApproutingModule } from './approuting/approuting.module';
import { BakeryItemsComponent } from './BakeryAppComponent/bakery-items/bakery-items.component';
import { CustomersComponent } from './BakeryAppComponent/customers/customers.component';
import { OrdersComponent } from './BakeryAppComponent/orders/orders.component';
import { MaterialsComponent } from './BakeryAppComponent/materials/materials.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, BodycomponentComponent, BakeryItemsComponent, CustomersComponent, OrdersComponent, MaterialsComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
