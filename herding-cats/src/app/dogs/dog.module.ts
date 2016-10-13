import {NgModule} from "@angular/core";
import {dogRouting} from "./dogs.routes";
import {DogListComponent} from "./dog-list.component";
import {DogDetailComponent} from "./dog-detail.component";
import {DogYearsPipe} from "./dog-years.pipe";
import {DogsComponent} from "./dogs.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {DogFormComponent} from "./dog-form.component";

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, dogRouting],
	declarations: [DogListComponent, DogDetailComponent, DogFormComponent, DogYearsPipe, DogsComponent]
})

export class DogModule {}