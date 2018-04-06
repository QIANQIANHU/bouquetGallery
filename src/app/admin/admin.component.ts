import { Component, OnInit } from '@angular/core';
import { BouquetService } from '../bouquet.service';
import { Bouquet } from '../bouquet.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BouquetService]
})
export class AdminComponent implements OnInit {

  constructor(private bouquetService: BouquetService) { }

  ngOnInit() {
  }
  submitForm(ImageUrl: string, refUrl: string, name: string, description: string){
    var newBouquet: Bouquet = new Bouquet(ImageUrl, refUrl, name, description);
    this.bouquetService.addBouquet(newBouquet);
  }
}
