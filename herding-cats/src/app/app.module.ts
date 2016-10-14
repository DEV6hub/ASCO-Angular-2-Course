import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CatModule} from "./cats/cat.module";
import {appRouting} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {AppHomeComponent} from "./home.component";
import {GuardDog} from "./guard-dog.service";
import {DogService} from "./dogs/dog.service";
import {BaseRequestOptions, RequestOptions} from "@angular/http";

class CustomRequestOptions extends BaseRequestOptions {
	constructor() {
		super();
		this.headers.append("Content-Type", "application/json");
	}
}

@NgModule({
	imports: [BrowserModule, CatModule, appRouting],
	declarations: [AppComponent, AppHomeComponent],
	providers: [GuardDog, DogService, { provide: RequestOptions, useClass: CustomRequestOptions }],
	bootstrap: [AppComponent]
})

export class AppModule {}