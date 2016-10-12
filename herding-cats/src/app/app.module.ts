import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CatModule} from "./cats/cat.module";
import {appRouting} from "./app.routes";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {AppHomeComponent} from "./home.component";

@NgModule({
	imports: [BrowserModule, CatModule, RouterModule, appRouting],
	declarations: [AppComponent, AppHomeComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}