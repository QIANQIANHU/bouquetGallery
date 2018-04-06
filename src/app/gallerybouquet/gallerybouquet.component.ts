import { Component, OnInit } from '@angular/core';
import { Bouquet } from '../bouquet.model';
import { Router } from '@angular/router';
import { BouquetService } from '../bouquet.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-gallerybouquet',
  templateUrl: './gallerybouquet.component.html',
  styleUrls: ['./gallerybouquet.component.css'],
  providers: [BouquetService]


})
export class GallerybouquetComponent implements OnInit{
   bouquets: FirebaseListObservable<any[]>;
   currentRoute: string = this.router.url;



constructor(private router: Router, private bouquetService: BouquetService) {}

  ngOnInit() {
    this.bouquets = this.bouquetService.getBouquet();

  }

  goToDetailPage(clickedBouquet) {
   this.router.navigate(['bouquets', clickedBouquet.$key]);
  };

 }
