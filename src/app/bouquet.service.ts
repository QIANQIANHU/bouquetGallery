import { Injectable } from '@angular/core';
import { Bouquet } from './bouquet.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BouquetService {
  bouquets: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.bouquets = database.list('bouquets');
   }

  getBouquet() {
    return this.bouquets;
  }

  addBouquet(newBouquet: Bouquet) {
    this.bouquets.push(newBouquet);
  }
  getBouquetById(bouquetId: string){
    return this.database.object('bouquets/' + bouquetId);
  }

  updateBouquet(localUpdatedBouquet)
  {
    var bouquetEntryInFirebase = this.getBouquetById(localUpdatedBouquet.$key);
    bouquetEntryInFirebase.update({imageUrl: localUpdatedBouquet.imageUrl,
                                refUrl: localUpdatedBouquet.refUrl,
                                name: localUpdatedBouquet.name,
                                description: localUpdatedBouquet.description});
  }

  deleteBouquet(localBouquetToDelete){
  var bouquetEntryInFirebase = this.getBouquetById(localBouquetToDelete.$key);
  bouquetEntryInFirebase.remove();
}
}
