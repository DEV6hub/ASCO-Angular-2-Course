import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CatModule} from "./cats/cat.module";
import {appRouting} from "./app.routes";
import {DogModule} from "./dogs/dog.module";

@NgModule({
	imports: [CatModule, DogModule, appRouting],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}