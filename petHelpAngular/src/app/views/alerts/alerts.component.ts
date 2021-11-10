import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/service/firestore/firestore.service';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  myPetAdvises= [] as any;
  markers = [] as any;
  zoom = 12;
  center = {
    lat: 39.57756014685514,
    lng: 2.6459507782795755
  }


  constructor(fireStore: FirestoreService) {
    fireStore.getAllPetAdvise().subscribe((advises) => {
      this.myPetAdvises = [];
      advises.forEach((document: any) => {
        this.myPetAdvises.push({
          id: document.payload.doc.id,
          data: document.payload.doc.data()
        })
        this.markers.push({
          position: {
            lat: parseFloat(document.payload.doc.data().lat),
            lng: parseFloat(document.payload.doc.data().lng)
          },
          label: {
            color: 'black',
            text: document.payload.doc.data().name,
          },
          title: document.payload.doc.data().name
        })
        console.log(parseFloat(document.payload.doc.data().lng))
      })
    })
  }
  
  ngOnInit(): void {
  }

}
