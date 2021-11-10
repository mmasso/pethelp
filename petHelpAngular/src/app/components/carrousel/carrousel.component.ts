import { Component, HostListener, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/service/firestore/firestore.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})



export class CarrouselComponent{

  myPetAdvises= [] as any;
  scrWidth: any;
  chunked: any;

  constructor(fireStore: FirestoreService) {
    fireStore.getAllPetAdvise().subscribe((advises) => {
      this.myPetAdvises = [];
      advises.forEach((document: any) => {
        this.myPetAdvises.push({
          id: document.payload.doc.id,
          data: document.payload.doc.data()
        });
      })
      this.scrWidth = window.innerWidth;
      if (this.scrWidth <= 425){
        this.chunked = 1;
      }
      if (this.scrWidth > 425){
        this.chunked = 2;
      }
      if (this.scrWidth >= 728){
        this.chunked = 3;
      }
      if (this.scrWidth >= 1440){
        this.chunked = 4;
      }
      this.myPetAdvises = this.chunk(this.myPetAdvises, this.chunked);
    })
  }

  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
}