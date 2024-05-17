import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faGear, faAddressBook, faBriefcase, faCalendar, faEarthAmericas, faEnvelope, faEye, faEyeSlash, faMarsAndVenus, faSchool} from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users-profile-view',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './users-profile-view.component.html',
  styleUrl: './users-profile-view.component.css'
})
export class UsersProfileViewComponent {
  faGear = faGear;
  faAddressBook = faAddressBook;
  faBriefcase = faBriefcase;
  faCalendar = faCalendar;
  faSchool = faSchool;
  faMarsAndVenus = faMarsAndVenus;
  faEarthAmericas = faEarthAmericas;
  faEnvelope = faEnvelope;
  faEye = faEye;

  @Input() userProfile: any;

  

  constructor(private http: HttpClient){
  }

  async ngOnInit(): Promise<void> {
    // Código que deseas ejecutar cuando el componente se inicializa
    console.log('El componente se ha inicializado.');
  }
}
