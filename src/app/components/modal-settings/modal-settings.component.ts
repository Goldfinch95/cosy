import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook, faBriefcase, faCalendar, faEarthAmericas, faEnvelope, faEye, faEyeSlash, faMarsAndVenus, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
RouterLink
Router
@Component({
  selector: 'app-modal-settings',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterLink],
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
 

  showPassword = false;
  showIcon = false;
  
  

  constructor(private formBuilder:FormBuilder, private http: HttpClient, private router: Router){
    
  }

  async ngOnInit(): Promise<void>{
    this.editForm = this.formBuilder.group({
      'name': [this.profileData.name ? this.profileData.name : 'Nombre'],
      'lastName': [this.profileData.lastName ? this.profileData.lastName : 'Apellido'],
      'profile_image': [this.profileData.profile_image ? this.profileData.profile_image : 'Url Perfil'],
      'background_image': [this.profileData.background_image ? this.profileData.background_image : 'Url Portada'],
      'address': [this.profileData.address? this.profileData.address : 'Dirección'],
      'work': [this.profileData.work ? this.profileData.work : 'Trabajo'],
      'birthdate': [this.profileData.birthdate ? this.profileData.birthdate : 'Cumpleaños'],
      'school': [this.profileData.school ? this.profileData.school : 'Escuela'],
      'genre': [this.profileData.genre ? this.profileData.genre : 'Genero'],
      'country': [this.profileData.country ? this.profileData.country : 'País'],
      'description': [this.profileData.description ? this.profileData.description : 'Descripción...'],
    })
    
}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.showIcon = !this.showIcon;
  }

  async onEnter(): Promise<void>{
    const token = localStorage.getItem('token');
    const formUser = this.editForm.value
    console.log(formUser)
    const dataUser = await lastValueFrom(this.http.put('http://localhost:13000/users/profile',formUser, {headers: {"Authorization": `Bearer ${token}`}}))
    location.reload() 
   console.log(dataUser)
   
}
}



