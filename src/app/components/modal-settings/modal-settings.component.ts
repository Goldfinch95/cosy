import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook, faBriefcase, faCalendar, faEarthAmericas, faEnvelope, faEye, faEyeSlash, faMarsAndVenus, faSchool } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-settings',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './modal-settings.component.html',
  styleUrl: './modal-settings.component.css'
})
export class ModalSettingsComponent {
  faAddressBook = faAddressBook;
  faBriefcase = faBriefcase;
  faCalendar = faCalendar;
  faSchool = faSchool;
  faMarsAndVenus = faMarsAndVenus;
  faEarthAmericas = faEarthAmericas;
  faEnvelope = faEnvelope;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  
  showPassword = false;
  showIcon = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.showIcon = !this.showIcon;
  }
}


