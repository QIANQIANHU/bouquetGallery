import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Bouquet } from '../bouquet.model';
import { BouquetService } from '../bouquet.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-bouquet-detail',
  templateUrl: './bouquet-detail.component.html',
  styleUrls: ['./bouquet-detail.component.css'],
  providers: [BouquetService]
})

export class BouquetDetailComponent implements OnInit {
   bouquetId: string;
   bouquetToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private bouquetService: BouquetService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.bouquetId = urlParameters['id'];
    });
    this.bouquetToDisplay = this.bouquetService.getBouquetById(this.bouquetId);
  }

}
