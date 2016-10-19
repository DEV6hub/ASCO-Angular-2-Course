import { Injectable } from '@angular/core';

import { Cat } from './cat';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class CatService {
	favouriteCat: Cat;
	private apiBase = 'http://localhost:9000';
	
	constructor(private http: Http) {}
	
	getCatList(): Observable<Cat[]> {
		return this.http.get(`${this.apiBase}/cats`)
		.map(response => response.json() as Cat[]);
	}
	
	getCat(id: number): Observable<Cat> {
		return this.http.get(`${this.apiBase}/cats/${id}`)
		.map(response => response.json() as Cat);
	}
	
	saveCat(unsavedCat: Cat): Promise<Cat> {
		if (unsavedCat.id) {
			return this.http.put(`${this.apiBase}/cats/${unsavedCat.id}`, JSON.stringify(unsavedCat))
			.toPromise()
			.then(response => response.json() as Cat);
		} else {
			return this.http.post(`${this.apiBase}/cats`, JSON.stringify(unsavedCat))
			.toPromise()
			.then(response => response.json() as Cat);
		}
	}
	
	removeCat(cat: Cat): Promise<void> {
		return this.http.delete(`${this.apiBase}/cats/${cat.id}`)
		.toPromise()
		.then(response => response.json());
	}
}
