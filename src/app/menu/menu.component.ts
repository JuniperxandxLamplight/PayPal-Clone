import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [FirebaseService]
})
export class MenuComponent implements OnInit {
  navs: FirebaseListObservable<any[]>;
  personal: FirebaseListObservable<any[]>;

  constructor(private database: FirebaseService) { }

  ngOnInit() {
    this.navs = this.database.getNavs();
  }

  loadPersonal(navs){
    this.personal = navs;
    console.log(navs);
  }

}
