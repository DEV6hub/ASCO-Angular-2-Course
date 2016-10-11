import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Dog} from "./dog";

@Component({
	selector: 'dog-detail',
	template: require('./dog-detail.component.html')
})
export class DogDetailComponent {
	@Input() dog: Dog;
	@Output() isFavourite = new EventEmitter<Dog>();
	@Output() edit = new EventEmitter<Dog>();
	
	selectFavourite() {
		this.isFavourite.emit(this.dog);
	}
	
	editDog() {
		this.edit.emit(this.dog);
	}
}
