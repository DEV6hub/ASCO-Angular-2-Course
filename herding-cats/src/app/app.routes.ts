import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AppHomeComponent} from "./home.component";
import {GuardDog} from "./guard-dog.service";

const routes: Routes = [
	{ path: 'dogs', loadChildren: './dogs/dog.module#DogModule', canLoad: [GuardDog] },
	{ path: '', component: AppHomeComponent, pathMatch: 'full' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
