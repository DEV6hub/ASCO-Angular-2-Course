import {NgModule} from "@angular/core";
import {catRouting} from "./cats.routes";
import {CatsComponent} from "./cats.component";
import {CatDetailComponent} from "./cat-detail.component";
import {CatListComponent} from "./cat-list.component";
import {CatService} from "./cat.service";
import {CatYearsPipe} from "./cat-years.pipe";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
@NgModule({
	imports: [CommonModule, RouterModule, catRouting],
	declarations: [CatsComponent, CatDetailComponent, CatListComponent, CatYearsPipe],
	providers: [CatService],
	exports: [CatsComponent]
})

export class CatModule {}