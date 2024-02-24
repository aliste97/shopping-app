import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../item.model';
import { ShoppingListService } from '../shopping-list.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {

  constructor (private shoppingListService: ShoppingListService, private dataStorageService: DataStorageService) {}

  onSubmit (itemForm: NgForm) {
    if (!itemForm.valid) { return; }

    const itemToAdd: Item = new Item (itemForm.value.name, itemForm.value.amount);
    this.shoppingListService.addItem (itemToAdd);

    this.dataStorageService.storeItem ();

    itemForm.reset ();
  } // onSubmit 
} // AddItemComponent
