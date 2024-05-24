// users-profile.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ProfilePublicationsComponent } from '../../components/profile-publications/profile-publications.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { UsersProfileViewComponent } from '../../components/users-profile-view/users-profile-view.component';
import { UsersPublicationsComponent } from '../users-publications/users-publications.component';

@Component({
  selector: 'app-users-profile',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, UsersProfileViewComponent , ProfilePublicationsComponent, UsersPublicationsComponent, HttpClientModule],
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export default class UsersProfileComponent implements OnInit {

  profileData: any;
  userId: any;  // Inicializado con una cadena vacía
  userProfile: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      this.getUserProfile();  // Si el id es null, asigna una cadena vacía
    });
    this.getProfile();
    
  }

  async getProfile(): Promise<void> {
    // Coloca aquí el código que deseas ejecutar al inicializar el componente
    const token = localStorage.getItem('token')
    let {name, lastName, profile_image}: any = await lastValueFrom(this.http.get('http://localhost:13000/users/profile', {headers: {"Authorization": `Bearer ${token}`}}));
    this.profileData = {name, lastName, profile_image}
    if(this.profileData.profile_image === '/images/user.png'){
      this.profileData.profile_image = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    }
  }

  async getUserProfile(): Promise <void>{

   this.userProfile = await lastValueFrom(this.http.post('http://localhost:13000/users/externalProfile/', {profileId: this.userId}));
   console.log(this.userProfile)
  }  
}

