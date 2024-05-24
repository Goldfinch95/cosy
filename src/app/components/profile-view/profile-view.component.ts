import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faGear, faAddressBook, faBriefcase, faCalendar, faEarthAmericas, faEnvelope, faEye, faEyeSlash, faMarsAndVenus, faSchool} from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ModalSettingsComponent } from '../modal-settings/modal-settings.component';
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

  

  constructor(private http: HttpClient){
  }

  async ngOnInit(): Promise<void> {
    // Código que deseas ejecutar cuando el componente se inicializa
    
  }
 
}
