import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/service/firestore/firestore.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  
  readonly subscription;
  myPetAdvises: any;
  parameters: any;
  markers = [] as any;
  zoom = 12;
  center = {
    lat: 39.57756014685514,
    lng: 2.6459507782795755
  }

  constructor(fireStore: FirestoreService, private route : ActivatedRoute) {

    this.subscription = this.route.paramMap.subscribe(
      params => {
        this.parameters = params.get('id');
    })

    fireStore.getAllPetAdvise().subscribe((advises) => {
      this.myPetAdvises = [];
      advises.forEach((document: any) => {
        this.myPetAdvises.push({
          id: document.payload.doc.id,
          data: document.payload.doc.data()
        });
      })
      this.myPetAdvises = [this.filterByName(this.myPetAdvises)];
      this.myPetAdvises.forEach((element: any) => {
        this.markers.push({
          position: {
            lat: parseFloat(element.data.lat),
            lng: parseFloat(element.data.lng)
          },
          label: {
            color: 'black',
            text: element.data.name,
          },
          title: element.data.name
        })
      });
    })
  }



  filterByName(pets: any) {
    let petFlitered;
    for (let pet of pets) {
      if (pet.id == this.parameters){
        petFlitered = pet
      }
    }
    console.log(petFlitered)
    return petFlitered
  }

  ngOnInit(): void {
  }

}
