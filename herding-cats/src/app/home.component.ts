import {Component} from "@angular/core";

@Component({
	selector: "app-home",
	template: `<a [routerLink]="'dogs'">Dog Lovers</a> or <a [routerLink]="'cats'">Cat Lovers</a>`
})

export class AppHomeComponent {
	
}
