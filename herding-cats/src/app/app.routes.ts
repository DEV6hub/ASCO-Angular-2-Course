import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AppHomeComponent} from "./home.component";

const routes: Routes = [
	{ path: 'dogs', loadChildren: './dogs/dog.module#DogModule' },
	{ path: '', component: AppHomeComponent, pathMatch: 'full' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
