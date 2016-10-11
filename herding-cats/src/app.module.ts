import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CatDetailComponent} from "./app/cat-detail.component";
import {FormsModule} from "@angular/forms";
import {CatYearsPipe} from "./app/cat-years.pipe";
import {CatService} from "./app/cat.service";
import {CatFormComponent} from "./app/cat-form.component";
import {DogDetailComponent} from "./app/dog-detail.component";
import {DogFormComponent} from "./app/dog-form.component";
import {DogService} from "./app/dog.service";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, CatDetailComponent, CatFormComponent, CatYearsPipe, DogDetailComponent, DogFormComponent],
	providers: [CatService, DogService],
	bootstrap: [AppComponent]
})

export class AppModule {}
