import {NgModule} from "@angular/core";
import {catRouting} from "./cats.routes";
import {CatsComponent} from "./cats.component";
import {CatDetailComponent} from "./cat-detail.component";
import {CatListComponent} from "./cat-list.component";
import {CatService} from "./cat.service";
import {CatYearsPipe} from "./cat-years.pipe";
import {CommonModule} from "@angular/common";
import {CatFormComponent} from "./cat-form.component";
import {FormsModule} from "@angular/forms";
@NgModule({
	imports: [CommonModule, FormsModule, catRouting],
	declarations: [CatsComponent, CatDetailComponent, CatListComponent, CatFormComponent, CatYearsPipe],
	providers: [CatService],
	exports: [CatsComponent]
})

export class CatModule {}