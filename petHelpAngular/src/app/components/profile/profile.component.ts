import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FirestoreService } from 'src/app/service/firestore/firestore.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  myPetAdvises= [] as any;
  scrWidth: any;
  chunked: any;
  constructor(public fireStore: FirestoreService, public ngAuthService: AuthService) {
    fireStore.getAllPetAdvise().subscribe((advises) => {
      this.myPetAdvises = [];
      advises.forEach((document: any) => {
        if(document.payload.doc.data().owner == ngAuthService.userState.email){
        this.myPetAdvises.push({
          id: document.payload.doc.id,
          data: document.payload.doc.data()
        });}
      })
    })
  }

  delete(id: any){
    this.fireStore.deletePetAdviseByID(id);
  }
  
  ngOnInit(): void {
  }

}
