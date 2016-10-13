import {Component} from "@angular/core";
import * as moment from "moment";
import {Dog} from "./dog";
import {DogService} from "./dog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'dog-form',
  template: require('./dog-form.component.html')
})
export class DogFormComponent {
  	dog: Dog;
	dogForm: FormGroup;
	
	constructor(private route: ActivatedRoute, private dogService: DogService, private router: Router, private formBuilder: FormBuilder) {
		let id: number = parseInt(route.snapshot.params["id"]);
		this.dog = dogService.getDog(id);
		
		if (!this.dog) {
			this.dog = new Dog();
		}
		
		this.dogForm = formBuilder.group({
			name: [this.dog.name, Validators.required],
			type: [this.dog.type],
			description: [this.dog.description],
			birthday: [this.birthdayForInput()]
		})
  	}
	
	birthdayForInput(): string {
		return moment(this.dog.birthday).format('YYYY-MM-DD');
	}
	
	setBirthday(dateString: string) {
		return moment(dateString, 'YYYY-MM-DD').toDate();
	}
	
	saveDog() {
		this.dog = Object.assign(this.dog, this.dogForm.value, { birthday: this.setBirthday(this.dogForm.value["birthday"])});
		this.dog = this.dogService.saveDog(this.dog);
		this.router.navigate(['dogs']);
	}
	
	removeDog() {
		this.dogService.removeDog(this.dog);
		this.router.navigate(['dogs']);
	}
}
