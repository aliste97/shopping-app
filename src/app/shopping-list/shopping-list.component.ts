import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from './item.model';
import { Subscription } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  items: Item[] = [];
  subscription!: Subscription;

  constructor (private shoppingListService: ShoppingListService, private dataStorageService: DataStorageService) {}

  ngOnInit (): void {
    this.dataStorageService.fetchItems ().subscribe ();

    this.subscription = this.shoppingListService.itemsChanged.subscribe (
        (items) => this.items = items
    );
  } // ngOnInit

  onDeleteItem (index: number) {
    const itemToDelete = this.shoppingListService.getItem (index);
    this.dataStorageService.deleteItem (itemToDelete);
  } // onDeleteItem

  ngOnDestroy(): void {
    this.subscription.unsubscribe ();
  } // ngOnDestroy
} // ShoppingListComponent
