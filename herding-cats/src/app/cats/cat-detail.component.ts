import {Component, OnDestroy} from "@angular/core";
import {Cat} from "./cat";
import {ActivatedRoute, Router} from "@angular/router";
import {CatService} from "./cat.service";
import {Subscription} from "rxjs";

@Component({
  	selector: 'cat-detail',
  	template: require('./cat-detail.component.html')
})
export class CatDetailComponent implements OnDestroy {
  	cat: Cat;
	sub: Subscription;
  
	constructor(private route: ActivatedRoute, private service: CatService, private router: Router) {
		let id: number = parseInt(route.snapshot.params["id"]);
		if ( isNaN(id) )
			return;
		
		this.sub = service.getCat(id).subscribe((result: Cat) => {
			this.cat = result;
		})
	}
	
	ngOnDestroy () {
		this.sub.unsubscribe();
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
