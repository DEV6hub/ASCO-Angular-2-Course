import { Injectable } from '@angular/core';

import { Cat } from './cat';
import {Observable} from "rxjs";

const matilda = new Cat('Matilda', 'Calico', 'Loves window sitting and snuggles', new Date(2016, 0, 25));
matilda.id = 1;

const boots = new Cat('Boots', 'Tabby', 'Likes to perch in high locations', new Date(2013, 8, 7));
boots.id = 2;

const fuzzy = new Cat('Fuzzy', 'Persian', 'Thinks she is the queen of all she sees', new Date(2006, 4, 20));
fuzzy.id = 3;

@Injectable()
export class CatService {
	favouriteCat: Cat = boots;
	private cats: Cat[] = [matilda, boots, fuzzy];
	private idCounter: number = 4;
	
	getCatList(): Observable<Cat[]> {
		return Observable.of(this.cats);
	}
	
	getCat(id: number): Observable<Cat> {
		return Observable.from(this.cats).filter(cat => cat.id == id);
	}
	
	saveCat(unsavedCat: Cat): Promise<Cat> {
		return new Promise ((resolve, reject) => {
			if (unsavedCat.id) {
				let currentCat = this.cats.find(cat => cat.id === unsavedCat.id);
				Object.assign(currentCat, unsavedCat);
				resolve(currentCat);
			} else {
				unsavedCat.id = this.idCounter++;
				this.cats.push(unsavedCat);
				resolve(unsavedCat);
			}
		});
	}
	
	removeCat(cat: Cat) {
		const index = this.cats.findIndex(c => c.id === cat.id);
		this.cats.splice(index, 1);
	}
}
