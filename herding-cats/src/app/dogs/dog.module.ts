import {NgModule} from "@angular/core";
import {dogRouting} from "./dogs.routes";
import {DogListComponent} from "./dog-list.component";
import {DogDetailComponent} from "./dog-detail.component";
import {DogYearsPipe} from "./dog-years.pipe";
import {DogService} from "./dog.service";
import {DogsComponent} from "./dogs.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
	imports: [CommonModule, RouterModule, dogRouting],
	declarations: [DogListComponent, DogDetailComponent, DogYearsPipe, DogsComponent],
	providers: [DogService],
})

export class DogModule {}