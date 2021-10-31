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

  constructor(fireStore: FirestoreService, public ngAuthService: AuthService) {
    fireStore.getAllPetAdvise().subscribe((advises) => {
      this.myPetAdvises = [];
      advises.forEach((document: any) => {
        if(document.payload.doc.data().owner == ngAuthService.userState.email){
        this.myPetAdvises.push({
          id: document.payload.doc.id,
          data: document.payload.doc.data()
        });}
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
  
  ngOnInit(): void {
  }

}
