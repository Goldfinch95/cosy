import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { WallComponent } from '../wall/wall.component';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,SidebarComponent, WallComponent, PostCardComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  profileData: any;
  constructor(private http: HttpClient){
    
  }

  async ngOnInit(): Promise<void> {
    // Coloca aquí el código que deseas ejecutar al inicializar el componente
    const token = localStorage.getItem('token')
    let {name, lastName, profile_image}: any = await lastValueFrom(this.http.get('http://localhost:13000/users/profile', {headers: {"Authorization": `Bearer ${token}`}}));
    this.profileData = {name, lastName, profile_image}
    if(this.profileData.profile_image === '/images/user.png'){
      this.profileData.profile_image = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    }
  }
}
