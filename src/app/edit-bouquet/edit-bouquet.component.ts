import { Component, Input, OnInit } from '@angular/core';
import { BouquetService } from '../bouquet.service';

@Component({
  selector: 'app-edit-bouquet',
  templateUrl: './edit-bouquet.component.html',
  styleUrls: ['./edit-bouquet.component.css'],
  providers: [BouquetService]
})

export class EditBouquetComponent implements OnInit {
  @Input() selectedBouquet;

  constructor(private bouquetService: BouquetService) { }

  ngOnInit() {
  }

  beginUpdatingBouquet(bouquetToUpdate){
    this.bouquetService.updateBouquet(bouquetToUpdate);
  }

  beginDeletingBouquet(bouquetToDelete){
  if(confirm("Are you sure you want to delete this item from the list?")){
    this.bouquetService.deleteBouquet(bouquetToDelete);
  }
}

}
