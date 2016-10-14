import {Component, OnDestroy} from "@angular/core";
import * as moment from "moment";
import {Cat} from "./cat";
import {CatService} from "./cat.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'cat-form',
  template: require('./cat-form.component.html')
})
export class CatFormComponent implements OnDestroy {
    cat: Cat = new Cat();
    sub: Subscription;
  
  constructor(private route: ActivatedRoute, private catService: CatService, private router: Router) {
    let id: number = parseInt(route.snapshot.params["id"]);
    
    if ( !isNaN(id) ) {
      this.sub = catService.getCat(id).subscribe((result: Cat) => {
        this.cat = result;
      });
    }
  }
  
  ngOnDestroy () {
    if ( this.sub ) {
      this.sub.unsubscribe();
    }
  }

  birthdayForInput(): string {
    return moment(this.cat.birthday).format('YYYY-MM-DD');
  }

  setBirthday(dateString: string) {
    this.cat.birthday = moment(dateString, 'YYYY-MM-DD').toDate();
  }

  saveCat() {
    this.catService.saveCat(this.cat).then((result: Cat) => {
      this.cat = result;
    });
    
    this.router.navigate(['cats']);
  }

  removeCat() {
    this.catService.removeCat(this.cat);
    this.router.navigate(['cats']);
  }

}
