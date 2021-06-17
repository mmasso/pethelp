import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  myDoc: any;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
    .collection("pets")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.myDoc = doc.data();
      });
    });
    console.log(this.myDoc)
  }

}
