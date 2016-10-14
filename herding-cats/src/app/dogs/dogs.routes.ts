import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {DogDetailComponent} from "./dog-detail.component";
import {DogListComponent} from "./dog-list.component";
import {DogsComponent} from "./dogs.component";
import {DogFormComponent} from "./dog-form.component";

export const dogRoutes: Routes = [
	{
    	path: '',
		component: DogsComponent,
 	   	children: [
			{ path: 'new', component: DogFormComponent },
			{ path: ':id/edit', component: DogFormComponent },
			{ path: ':id', component: DogDetailComponent },
			{ path: '', component: DogListComponent }
	   	]
	}
];

export const dogRouting: ModuleWithProviders = RouterModule.forChild(dogRoutes);