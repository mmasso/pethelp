import { Component, ViewChild } from '@angular/core';
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

  constructor(fireStore: FirestoreService) {
    fireStore.getAllPetAdvise().subscribe((advises) => {
      this.myPetAdvises = [];
      advises.forEach((document: any) => {
        this.myPetAdvises.push({
          id: document.payload.doc.id,
          data: document.payload.doc.data()
        });
      })
      this.myPetAdvises = this.chunk(this.myPetAdvises, 4);
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