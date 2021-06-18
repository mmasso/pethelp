import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FirestoreService } from 'src/app/service/firestore/firestore.service';
import { PetAdvise } from '../../models/pet-advise';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  petAdvise = {} as PetAdvise

  petAdviseForm = new FormGroup({
    animalName: new FormControl(''),
    age: new FormControl(''),
    type: new FormControl(''),
    breed: new FormControl(''),
    color: new FormControl(''),
    contact: new FormControl(''),
    description: new FormControl(''),
    gender: new FormControl(''),
    image: new FormControl(''),
    location: new FormControl(''),
    size: new FormControl('')
  });

  constructor(public ngAuthService: AuthService, public firestoreService: FirestoreService,  private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.petAdvise.name = this.petAdviseForm.get('animalName')?.value
    this.petAdvise.age = this.petAdviseForm.get('age')?.value
    this.petAdvise.animalType = this.petAdviseForm.get('type')?.value
    this.petAdvise.breed = this.petAdviseForm.get('breed')?.value
    this.petAdvise.color = this.petAdviseForm.get('color')?.value
    this.petAdvise.contact = this.petAdviseForm.get('contact')?.value
    this.petAdvise.description = this.petAdviseForm.get('description')?.value
    this.petAdvise.gender = this.petAdviseForm.get('gender')?.value
    this.petAdvise.image = this.petAdviseForm.get('image')?.value
    this.petAdvise.location = this.petAdviseForm.get('location')?.value
    this.petAdvise.size = this.petAdviseForm.get('size')?.value
    this.petAdvise.owner = JSON.parse(localStorage.getItem('user') || '{}').email
    console.warn(this.petAdviseForm.value)
    this.firestoreService.createPetAdvise(this.petAdvise)
    this.petAdviseForm.reset();
  }

}
