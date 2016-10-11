import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CatModule} from "./cats/cat.module";
import {appRouting} from "./app.routes";

@NgModule({
	imports: [CatModule, appRouting],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}