import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faGear, faAddressBook, faBriefcase, faCalendar, faEarthAmericas, faEnvelope, faEye, faEyeSlash, faMarsAndVenus, faSchool} from '@fortawesome/free-solid-svg-icons';
import { ModalSettingsComponent } from '../modal-settings/modal-settings.component';
import {HttpClient} from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [FontAwesomeModule, ModalSettingsComponent],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent {
  faGear = faGear;
  faAddressBook = faAddressBook;
  faBriefcase = faBriefcase;
  faCalendar = faCalendar;
  faSchool = faSchool;
  faMarsAndVenus = faMarsAndVenus;
  faEarthAmericas = faEarthAmericas;
  faEnvelope = faEnvelope;
  faEye = faEye;

  @Input() profileData: any;
  userData: any;

  constructor(private http: HttpClient){
  }

  async ngOnInit(): Promise<void> {
    // Código que deseas ejecutar cuando el componente se inicializa
    console.log('El componente se ha inicializado.');
    const token = localStorage.getItem('token')
    let {name,lastName,address,birthdate,school,genre,country,description,profile_image,background_image}: any = await lastValueFrom(this.http.get('http://localhost:13000/users/profile', {headers: {"Authorization": `Bearer ${token}`}}));
    this.userData = {name,lastName,address,birthdate,school,genre,country,description,profile_image,background_image}
    console.log(this.userData)
  }
 
}
