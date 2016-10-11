import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { Dog } from './dog';
import { DogService } from './dog.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
	selector: 'dog-form',
	template: require('./dog-form.component.html')
})
export class DogFormComponent implements OnInit {
	@Input() dogId: number;
	@Output() saved = new EventEmitter<Dog>();
	dog: Dog;
	
	dogForm: FormGroup;
	
	constructor(private dogService: DogService, private formBuilder: FormBuilder) {
		this.dogForm = this.formBuilder.group({
			name: ["", Validators.required],
			type: [""],
			description: [""],
			birthday: [new Date()]
		})
	}
	
	ngOnInit(): void {
		this.dog = this.dogService.getDog(this.dogId);
		
		if (!this.dog) {
			this.dog = new Dog();
		}
	}
	
	birthdayForInput(): string {
		return moment(this.dog.birthday).format('YYYY-MM-DD');
	}
	
	setBirthday(dateString: string) {
		this.dog.birthday = moment(dateString, 'YYYY-MM-DD').toDate();
	}
	
	saveDog() {
		this.dog = this.dogService.saveDog(this.dog);
		this.saved.emit(this.dog);
	}
	
	removeDog() {
		this.dogService.removeDog(this.dog);
		this.saved.emit(undefined);
	}
	
}
