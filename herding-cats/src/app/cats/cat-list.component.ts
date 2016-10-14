import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Cat} from "./cat";
import {CatService} from "./cat.service";

@Component({
  selector: 'cat-list',
  template: require('./cat-list.component.html')
})

export class CatListComponent implements OnInit {
	favouriteCat: Cat;
	cats: Cat[];
	
	constructor(
		private router: Router,
		private catService: CatService
	) { }
	
	ngOnInit(): void {
		this.catService.getCatList().then((result: Cat[]) => {
			this.cats = result;
		});
		
		this.favouriteCat = this.catService.favouriteCat;
	}
	
	selectCat(cat: Cat) {
		this.router.navigate(['cats', cat.id]);
	}
	
	add () {
		this.router.navigate(['cats', 'new']);
	}

}
