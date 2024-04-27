import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileViewComponent } from '../../components/profile-view/profile-view.component';
import { ProfilePublicationsComponent } from '../../components/profile-publications/profile-publications.component';
ProfilePublicationsComponent
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NavbarComponent,
    SidebarComponent,
    HttpClientModule,
    ProfileViewComponent,
    ProfilePublicationsComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  faCamera = faCamera;
  profileData: any;
  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    // Coloca aquí el código que deseas ejecutar al inicializar el componente
    const token = localStorage.getItem('token');
    const { name, lastName, profile_image, background_image
    }: any = await lastValueFrom(
      this.http.get('172.21.0.1/users/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
    );
    this.profileData = { name, lastName, profile_image, background_image
    };
    
  }
}
