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
 
  submitted= false;
  showPassword = false;
  showIcon = false;
  
  

  constructor(private formBuilder:FormBuilder, private http: HttpClient, private router: Router){
    
  }

  //trabajando en las validaciones

  async ngOnInit(): Promise<void>{
    this.editForm = this.formBuilder.group({
      'name': [this.profileData.name ? this.profileData.name : 'Nombre', [Validators.required,Validators.minLength(4), Validators.maxLength(15), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ]+(?:\s[a-zA-ZáéíóúÁÉÍÓÚ]+)*$/)]],
      'lastName': [this.profileData.lastName ? this.profileData.lastName : 'Apellido', [Validators.required,Validators.minLength(4), Validators.maxLength(15), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ]+(?:\s[a-zA-ZáéíóúÁÉÍÓÚ]+)*$/)]],
      'profile_image': [this.profileData.profile_image ? this.profileData.profile_image : 'https://cdn-icons-png.flaticon.com/512/149/149071.png',[Validators.required,Validators.minLength(2)]],
      'background_image': [this.profileData.background_image ? this.profileData.background_image : 'https://p4.wallpaperbetter.com/wallpaper/650/47/795/hdr-fireplace-indoors-fire-wallpaper-preview.jpg',[Validators.required,Validators.minLength(2)]],
      'address': [this.profileData.address? this.profileData.address : 'Dirección', [Validators.required,Validators.minLength(5), Validators.maxLength(100), Validators.pattern(/^(?:[a-zA-ZáéíóúÁÉÍÓÚ]+(?:\s|$)|(?:\d+[a-zA-ZáéíóúÁÉÍÓÚ]*[^\s\d]|[a-zA-ZáéíóúÁÉÍÓÚ]+\d*[^\s\d]))(?:[a-zA-ZáéíóúÁÉÍÓÚ0-9]*\s?)*$/)]],
      'work': [this.profileData.work ? this.profileData.work : 'Trabajo', [Validators.required,Validators.minLength(5), Validators.maxLength(100), Validators.pattern(/^(?:[a-zA-ZáéíóúÁÉÍÓÚ]+(?:\s|$)|(?:\d+[a-zA-ZáéíóúÁÉÍÓÚ]*[^\s\d]|[a-zA-ZáéíóúÁÉÍÓÚ]+\d*[^\s\d]))(?:[a-zA-ZáéíóúÁÉÍÓÚ0-9]*\s?)*$/)]],
      'birthdate': [this.profileData.birthdate ? this.profileData.birthdate : null, [Validators.required, this.validateBirthdate]],
      'school': [this.profileData.school ? this.profileData.school : 'Escuela', [Validators.required,Validators.minLength(2), Validators.maxLength(100), Validators.pattern(/^(?:[a-zA-ZáéíóúÁÉÍÓÚ]+(?:\s|$)|(?:\d+[a-zA-ZáéíóúÁÉÍÓÚ]*[^\s\d]|[a-zA-ZáéíóúÁÉÍÓÚ]+\d*[^\s\d]))(?:[a-zA-ZáéíóúÁÉÍÓÚ0-9]*\s?)*$/)]],
      'genre': [this.profileData.genre ? this.profileData.genre : 'Genero', [Validators.required,Validators.minLength(5), Validators.maxLength(100), Validators.pattern(/^(?:[a-zA-Z]+)$/)]],
      'country': [this.profileData.country ? this.profileData.country : 'País', [Validators.required,Validators.minLength(5), Validators.maxLength(100), Validators.pattern(/^(?:(?:[a-zA-Z]{1,5}\s?)|(?:(?:[a-zA-Z]{1,5}\s?)+))?$/)]],
      'description': [this.profileData.description ? this.profileData.description : 'Descripción...',[Validators.required, Validators.minLength(15),Validators.maxLength(280), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ]+(?:\s[a-zA-ZáéíóúÁÉÍÓÚ]+)*[\.\!]*$/)]]
    })
    
}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.showIcon = !this.showIcon;
  }

  async onSubmit(): Promise<void>{
    this.submitted = true;
    if(this.editForm.invalid){
      return
    }
    if(this.submitted){
      const token = localStorage.getItem('token');
      const formUser = this.editForm.value
      console.log(formUser)
      const dataUser = await lastValueFrom(this.http.put('http://localhost:13000/users/profile',formUser, {headers: {"Authorization": `Bearer ${token}`}}))
      location.reload() 
     console.log(dataUser)
    }
   
}

validateBirthdate(control: any) {
  const birthday = new Date(control.value);
  const today = new Date();
  const minAge = 13;
  const maxAge = 80;
  const minDate = new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate());
  const maxDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
  console.log(`minDate: ${minDate}, maxDate: ${maxDate}`);
  if (birthday < minDate || birthday > maxDate) {
    return { 'invalidBirthdate': true };
  }
  return null;
}
}



