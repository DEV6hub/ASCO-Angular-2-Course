import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {dogRouting} from "./dogs.routes";
import {FormsModule} from "@angular/forms";
import {DogListComponent} from "./dog-list.component";
import {DogDetailComponent} from "./dog-detail.component";
import {DogYearsPipe} from "./dog-years.pipe";
import {DogService} from "./dog.service";
import {DogsComponent} from "./dogs.component";
@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule, dogRouting],
	declarations: [DogListComponent, DogDetailComponent, DogYearsPipe, DogsComponent],
	providers: [DogService],
	exports: [DogsComponent]
})

export class DogModule {}