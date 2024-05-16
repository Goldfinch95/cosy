import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faDoorOpen,
  faMessage,
  faSearch,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { promises } from 'dns';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  faBell = faBell;
  faMessage = faMessage;
  faUserGroup = faUserGroup;
  faDoorOpen = faDoorOpen;
  faSearch = faSearch;

  inputSearchValue = "";
  

  notifications = [
    {
      profile_img: "https://avatars.githubusercontent.com/u/1561955?v=4",
      profile_name: "Miguel Angel Duran",
      value: 'notificationLike',
    },
    {
      profile_img: "https://avatars.githubusercontent.com/u/6494462?v=4",
      profile_name: "Gonzalo Pozzo",
      value: 'notificationComment',
    },
    {
      profile_img: "https://avatars.githubusercontent.com/u/15913811?v=4",
      profile_name: "Carmen Ansio",
      value: 'notificationComment',
    },
    {
      profile_img: "https://avatars.githubusercontent.com/u/90206336?v=4",
      profile_name: "Julian Ajras",
      value: 'notificationLike',
    },
  ];


  filteredNotifications: UserData[] = [];
  data: UserData[] = [];

  constructor(private http: HttpClient){
    
  }

  onEnter(){
    if(this.inputSearchValue === ""){
      return
    }
    this.fetchUsers();
     this.filteredNotifications = this.data.filter( userData => userData.name.toLowerCase().includes(this.inputSearchValue.toLowerCase()) ||
     userData.lastName.toLowerCase().includes(this.inputSearchValue.toLowerCase()));
     console.log(this.filteredNotifications)

    /*} else {
      this.filteredNotifications = this.notifications.filter(notification =>
        notification.profile_name.toLowerCase().includes(this.inputSearchValue.toLowerCase())
      );
    }*/
  }

  async fetchUsers(): Promise<void>{
    try {
      const token = localStorage.getItem('token');
      this.data = await lastValueFrom(this.http.get<any>('http://localhost:13000/users/allProfiles', { headers: { "Authorization": `Bearer ${token}` } }));
      
      console.log(this.data)
    } catch (error: any) {
      console.error('Error fetching users:', error);
    }
  }
  
}
interface UserData {
  name: string;
  lastName: string;
  // otras propiedades si las hay
}