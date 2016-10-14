import {Component} from "@angular/core";
import {Cat} from "./cat";
import {ActivatedRoute, Router} from "@angular/router";
import {CatService} from "./cat.service";

@Component({
  	selector: 'cat-detail',
  	template: require('./cat-detail.component.html')
})
export class CatDetailComponent {
  	cat: Cat;
  
	constructor(private route: ActivatedRoute, private service: CatService, private router: Router) {
		let id: number = parseInt(route.snapshot.params["id"]);
		if ( isNaN(id) )
			return;
		
		service.getCat(id).then((result: Cat) => {
			this.cat = result;
		})
	}
  
	isFavourite (): boolean {
		return this.service.favouriteCat === this.cat;
	}

  	selectFavourite() {
    	this.service.favouriteCat = this.cat;
  	}
	
	edit () {
		this.router.navigate(['cats', this.cat.id, 'edit'])
	}
}
