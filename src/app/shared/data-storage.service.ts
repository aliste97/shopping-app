import { HttpClient } from "@angular/common/http";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Item } from "../shopping-list/item.model";

@Injectable ({ providedIn: 'root'})
export class DataStorageService {
    constructor (private http: HttpClient, private shoppingListService: ShoppingListService) {}

    storeItem () {
        const items = this.shoppingListService.getItems ();
        this.http.put ('https://shopping-app-001-default-rtdb.europe-west1.firebasedatabase.app/items.json', items).subscribe (response => {
            console.log (response);
        });
    } // storeItem

    fetchItems () {
        return this.http.get<Item[]> ('https://shopping-app-001-default-rtdb.europe-west1.firebasedatabase.app/items.json').pipe (
            map (items => {
                if (!items) { return []; }
                const itemsFiltered = items.filter (item => item);
                return itemsFiltered.map (item => {
                    return {
                        ...item
                    }
                })
            }),    
            tap (items => {
                    this.shoppingListService.setItems (items);
                })
            );
    } // fetchItems

    deleteItem (item: Item) {
        const items = this.shoppingListService.getItems ();
        // Find the item that should be deleted
        const itemToDelete = items.find (el => el && el.name === item.name);
        
        if (itemToDelete) {
            const index = items.indexOf (itemToDelete);
            this.http.delete ('https://shopping-app-001-default-rtdb.europe-west1.firebasedatabase.app/items/' + items.indexOf (itemToDelete) + '.json')
                     .subscribe (() => this.shoppingListService.deleteItem (index));
        } // if
    } // deleteItem
} // DataStorageService