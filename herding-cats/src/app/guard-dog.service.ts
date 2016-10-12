import {Injectable} from "@angular/core";
import {Router, CanLoad, Route} from "@angular/router";
import {DogService} from "./dogs/dog.service";

@Injectable()
export class GuardDog implements CanLoad {
	constructor(private router: Router, private dogService: DogService) {
		
	}
	
	canLoad(route: Route): boolean {
		return this.dogService.favouriteDog.type != "Chihuahua";
	}
}
