import { Component } from '@angular/core';

@Component({
  selector: 'app-bakery-items',
  templateUrl: './bakery-items.component.html',
  styleUrls: ['./bakery-items.component.css']
})
export class BakeryItemsComponent {
  canBakeryItemContentShow: Boolean = true;
  canBakeryItemContentListShow: Boolean = false;
  itemName: string = '';
  ItemPrice: string = '';
  ItemDescription: string = '';
  bakeryItemList: any = [{
    itemName: 'petis1',
    itemDescription: 'this is a god petis',
    itemPrice: 23
  }, {

    itemName: 'petis2',
    itemDescription: 'this is a god petis',
    itemPrice: 23
  }, {
    itemName: 'petis3',
    itemDescription: 'this is a god petis',
    itemPrice: 23
  }, {
    itemName: 'petis4',
    itemDescription: 'this is a god petis',
    itemPrice: 23
  }]





  showBakeryItem() {
    this.canBakeryItemContentShow = true;
    this.canBakeryItemContentListShow = false;
  }
  showBakeryItemList() {
    this.canBakeryItemContentListShow = true;
    this.canBakeryItemContentShow = false;

  }
  onAdditionItem() {
    console.log(this.itemName);
    console.log(this.ItemPrice);
    console.log(this.ItemDescription);

  }


}
