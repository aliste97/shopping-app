import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { CommonModule } from "@angular/common";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule ({
    declarations: [AlertComponent, LoadingSpinnerComponent, PlaceholderDirective],
    imports: [CommonModule],
    exports: [AlertComponent, LoadingSpinnerComponent, PlaceholderDirective]
})
export class SharedModule {

} // SharedModule