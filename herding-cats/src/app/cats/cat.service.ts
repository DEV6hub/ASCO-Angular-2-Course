import { Injectable } from '@angular/core';

import { Cat } from './cat';

const matilda = new Cat('Matilda', 'Calico', 'Loves window sitting and snuggles', new Date(2016, 0, 25));
matilda.id = 1;

const boots = new Cat('Boots', 'Tabby', 'Likes to perch in high locations', new Date(2013, 8, 7));
boots.id = 2;

const fuzzy = new Cat('Fuzzy', 'Persian', 'Thinks she is the queen of all she sees', new Date(2006, 4, 20));
fuzzy.id = 3;

@Injectable()
export class CatService {
	favouriteCat: Cat = boots;
	private cats = [matilda, boots, fuzzy];
	private idCounter: number = 4;
	
	getCatList(): Promise<Cat[]> {
		return new Promise((resolve, reject) => {
			resolve(this.cats);
		});
	}
	
	getCat(id: number): Promise<Cat> {
		return new Promise((resolve, reject) => {
			resolve(this.cats.find(cat => cat.id === id));
		});
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
