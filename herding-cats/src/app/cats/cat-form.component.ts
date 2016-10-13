import {Component} from "@angular/core";
import * as moment from "moment";
import {Cat} from "./cat";
import {CatService} from "./cat.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'cat-form',
  template: require('./cat-form.component.html')
})
export class CatFormComponent {
    cat: Cat;
  
  constructor(private route: ActivatedRoute, private catService: CatService, private router: Router) {
    let id: number = parseInt(route.snapshot.params["id"]);
    this.cat = catService.getCat(id);
    
    if (!this.cat) {
      this.cat = new Cat();
    }
  }

  birthdayForInput(): string {
    return moment(this.cat.birthday).format('YYYY-MM-DD');
  }

  setBirthday(dateString: string) {
    this.cat.birthday = moment(dateString, 'YYYY-MM-DD').toDate();
  }

  saveCat() {
    this.cat = this.catService.saveCat(this.cat);
    this.router.navigate(['cats']);
  }

  removeCat() {
    this.catService.removeCat(this.cat);
    this.router.navigate(['cats']);
  }

}
