import {Routes, RouterModule} from '@angular/router';

import { DogsComponent } from './dogs.component';
import {ModuleWithProviders} from "@angular/core";
import {DogDetailComponent} from "./dog-detail.component";
import {DogListComponent} from "./dog-list.component";

export const catRoutes: Routes = [
  {
    path: '',
    component: DogsComponent,
    children: [
        
      { path: ':id', component: DogDetailComponent },
      { path: '', component: DogListComponent }
    ]
  }
];

export const dogRouting: ModuleWithProviders = RouterModule.forChild(catRoutes);