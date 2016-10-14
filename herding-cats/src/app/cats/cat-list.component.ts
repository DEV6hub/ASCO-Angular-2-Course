import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {Cat} from "./cat";
import {CatService} from "./cat.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'cat-list',
  template: require('./cat-list.component.html')
})

export class CatListComponent implements OnInit, OnDestroy {
	favouriteCat: Cat;
	cats: Cat[];
	sub: Subscription;
	
	constructor(
		private router: Router,
		private catService: CatService
	) { }
	
	ngOnInit(): void {
		this.sub = this.catService.getCatList().subscribe((result: Cat[]) => {
			this.cats = result;
		});
		
		this.favouriteCat = this.catService.favouriteCat;
	}
	
	ngOnDestroy () {
		this.sub.unsubscribe();
	}
	
	selectCat(cat: Cat) {
		this.router.navigate(['cats', cat.id]);
	}
	
	add () {
		this.router.navigate(['cats', 'new']);
	}

}
