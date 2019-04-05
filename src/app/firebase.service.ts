import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  navs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.navs = database.list('navigation');
  }

  getNavs(){
    return this.navs;
  }

  getMenu(nav){
    return this.database.list('Navigation/' + nav)
  }

}
