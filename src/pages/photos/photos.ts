import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ModalController, LoadingController } from 'ionic-angular';
import { ShowMapPage } from '../show-map/show-map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html'
})
export class PhotosPage {
  public photos: Observable<any[]> = new Observable<any[]>();

  constructor(db: AngularFireDatabase, private modalCtrl: ModalController, private loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({ content: "Carregando fotos..." });
    loader.present();

    this.photos = db.list('/photos').valueChanges();
    loader.dismiss();
  }

  showMap(location) {
    let modal = this.modalCtrl.create(ShowMapPage, { location: location });
    modal.present();
  }
}
