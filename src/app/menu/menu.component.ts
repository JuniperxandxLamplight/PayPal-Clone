import { Component, OnInit } from '@angular/core';
import { Nav } from '../nav.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  personal: Nav[] = [
    new Nav("What is PayPal?", "Learn how PayPal works in your everyday life"),
    new Nav("Check Out Securely Online", "Use your credit card or other funds"),
    new Nav("PayPal Credit & Cards", "Our credit, debit, prepaid cards & PayPal credit"),
    new Nav("PayPal App", "Tranfer money and track activity with our app"),
    new Nav("PayPal Can Do That", "Discover ways to manage and move your money"),
    new Nav("Shopping and More", "Deals, gift cards and donations")
  ]
  business: Nav[] = [
    new Nav("All Solutions", "Our business products and services"),
    new Nav("Business Loans", "Fast and fair financing"),
    new Nav("Payments", "Take payment online and in-person"),
    new Nav("Credit for Your Customers", "Promote financing to help sell more"),
    new Nav("Online Business Services", "Solutions to build, run, and expand"),
    new Nav("Business in a Box", "Easy, all-in-one ecommerce tool")
  ]

  constructor() { }

  ngOnInit() {
  }

}
