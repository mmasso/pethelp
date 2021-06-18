import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/service/firestore/firestore.service';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  myPetAdvises= [] as any;

  constructor(fireStore: FirestoreService) {
    fireStore.getAllPetAdvise().subscribe((advises) => {
      this.myPetAdvises = [];
      advises.forEach((document: any) => {
        this.myPetAdvises.push({
          id: document.payload.doc.id,
          data: document.payload.doc.data()
        })
      })
    })
  }

  
  ngOnInit(): void {
  }

}
