import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook, faBriefcase, faCalendar, faEarthAmericas, faEnvelope, faEye, faEyeSlash, faMarsAndVenus, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-modal-settings',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule],
  templateUrl: './modal-settings.component.html',
  styleUrl: './modal-settings.component.css'
})
export class ModalSettingsComponent {

  editForm!:FormGroup
  formUser: any;

  faAddressBook = faAddressBook;
  faBriefcase = faBriefcase;
  faCalendar = faCalendar;
  faSchool = faSchool;
  faMarsAndVenus = faMarsAndVenus;
  faEarthAmericas = faEarthAmericas;
  faEnvelope = faEnvelope;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  
  @Input() profileData: any;
  @Input() userData: any;

  showPassword = false;
  showIcon = false;
  
  

  constructor(private formBuilder:FormBuilder, private http: HttpClient){
    
  }

  ngOnInit(): void{
    this.editForm = this.formBuilder.group({
      'name': [''],
      'lastName': [''],
      'profile_image': [''],
      'background_image': [''],
      'address': [''],
      'work': [''],
      'birthdate': [''],
      'school': [''],
      'genre': [''],
      'country': [''],
      'description': [''],
      
    })
    
}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.showIcon = !this.showIcon;
  }

  async onEnter(): Promise<void>{
    console.log('editado')
    console.log(this.editForm)
    const token = localStorage.getItem('token');
    const formUser = this.editForm.value
    const dataUser = await lastValueFrom(this.http.put('http://localhost:13000/users/profile',formUser, {headers: {"Authorization": `Bearer ${token}`}}))
    console.log(dataUser)
}
}



