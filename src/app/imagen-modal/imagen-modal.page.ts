import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams, IonSlides } from "@ionic/angular";
import { $ } from 'protractor';
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})
export class ImagenModalPage implements OnInit {

  indice: number;

  options = {
    pager : true,
    zoom : {
      maxRatio : 8
    }
  }

  @ViewChild('slides', {static: true}) slides : IonSlides;

  @ViewChild('slides', {read : ElementRef}) slide: ElementRef;

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

  viewEntered = false;

  constructor(private modalCtrl : ModalController, private navparams : NavParams, private loadingController: LoadingController) {

  this.loadingController.create({
      message: 'Cargando imagen'
    }).then(loading => loading.present())

     this.indice = this.navparams.get('index');
  console.log(this.indice)
   }

  ngOnInit() {

    console.log(this.slide);

    this.slides.slideTo(this.indice, 0).then(res => {
      this.loadingController.dismiss()
    })
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }


  zoom(zoom:boolean){
    if(zoom){
      this.slide.nativeElement.swiper.zoom.in()
    }
    else{
      this.slide.nativeElement.swiper.zoom.out()
    }
  }
  ionViewDidEnter() {
    this.viewEntered = true; }

 

  

}
