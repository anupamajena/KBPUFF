
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { BakeryItemsComponent } from '../BakeryAppComponent/bakery-items/bakery-items.component';
import { CustomersComponent } from '../BakeryAppComponent/customers/customers.component';
import { MaterialsComponent } from './../BakeryAppComponent/materials/materials.component';
import { OrdersComponent } from '../BakeryAppComponent/orders/orders.component';
import { BodycomponentComponent } from '../BakeryAppComponent/bodycomponent/bodycomponent.component';


const routes:Routes=[
  {path:'', component: BodycomponentComponent},
  {path:'bakery', component: BakeryItemsComponent},
  {path:'customer',component:CustomersComponent},
  {path:'material',component:MaterialsComponent},
  {path:'order',component:OrdersComponent}
]





@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApproutingModule { }
