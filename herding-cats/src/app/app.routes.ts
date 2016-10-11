import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [
	{ path: '', redirectTo: 'cats', pathMatch: 'full' },
	{ path: 'dogs', loadChildren: './dogs/dog.module#DogModule' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);