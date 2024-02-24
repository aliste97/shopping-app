import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Item } from "./item.model";

@Injectable ({ providedIn: 'root' })
export class ShoppingListService {
    private items: Item[] = [];
    itemsChanged = new Subject<Item[]> ();

    getItems () {
        return this.items.slice ();
    } // getItems

    getItem (index: number) {
        return this.items[index];
    } // getItem

    addItem (item: Item) {
        this.items.push (item);
        this.itemsChanged.next (this.items.slice ());
    } // addItem

    setItems (items: Item[]) {
        this.items = items;
        this.itemsChanged.next (this.items.slice ());
    } // setItems

    deleteItem (index: number) {
        this.items.splice (index, 1);
        this.itemsChanged.next (this.items.slice ())
    } // deleteItem
    
} // ShoppingListService