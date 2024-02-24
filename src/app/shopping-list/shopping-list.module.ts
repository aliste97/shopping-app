import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from "@angular/forms";
import { ShoppingListService } from "./shopping-list.service";

@NgModule ({
    declarations: [ShoppingListComponent, AddItemComponent],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild ([{ path: '', component: ShoppingListComponent }])
    ]
})
export class ShoppingListModule {
} // ShoppingListModule