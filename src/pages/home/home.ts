import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IMAGELIST } from '../../mocks/image.mocks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imageList;

  constructor(public navCtrl: NavController) {
    this.imageList = IMAGELIST;

  }

  ionViewDidLoad(){
    console.log(IMAGELIST);
  }

}
