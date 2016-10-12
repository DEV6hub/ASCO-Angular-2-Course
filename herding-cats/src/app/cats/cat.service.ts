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

  getCatList(): Cat[] {
    return this.cats;
  }

  getCat(id: number): Cat {
    return this.cats.find(cat => cat.id === id);
  }
}
