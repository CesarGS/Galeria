import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ImagenModalPage } from "../imagen-modal/imagen-modal.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl : ModalController){

  }

  imagenes = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.png',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    
  ];

  verImagen(index){

    this.modalCtrl.create({
      component : ImagenModalPage,
      componentProps : {
        index : index
       
      }
      
    }).then(modal => modal.present())
  }

}
