import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { PetAdvise } from '../../models/pet-advise'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  public createPetAdvise(petAdvise: PetAdvise){
    return this.firestore.collection('petAdvise').add(petAdvise)
  }

  public updatePetAdvise(){}

  public getPetAdviseByID(){}

  public getAllPetAdvise(){
    return this.firestore.collection('petAdvise').snapshotChanges()
  }

  public deletePetAdviseByID(){}


}
