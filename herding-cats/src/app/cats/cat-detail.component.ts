import {Component} from "@angular/core";
import {Cat} from "./cat";
import {ActivatedRoute} from "@angular/router";
import {CatService} from "./cat.service";

@Component({
  	selector: 'cat-detail',
  	template: require('./cat-detail.component.html')
})
export class CatDetailComponent {
  	cat: Cat;
  
	constructor(private route: ActivatedRoute, private service: CatService) {
		let id: number = parseInt(route.snapshot.params["id"]);
		if ( isNaN(id) )
			return;
		
		this.cat = service.getCat(id);
	}
  
	isFavourite (): boolean {
		return this.service.favouriteCat === this.cat;
	}

  	selectFavourite() {
    	this.service.favouriteCat = this.cat;
  	}
}
