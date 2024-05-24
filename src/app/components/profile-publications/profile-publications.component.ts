import { Component, Input } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-profile-publications',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './profile-publications.component.html',
  styleUrl: './profile-publications.component.css'
})
export class ProfilePublicationsComponent {

  @Input() profileData: any;

  profilePublications: any;

  constructor(private http: HttpClient){}

  async ngOnInit(): Promise<void> {
    const token = localStorage.getItem('token');
    const data = await lastValueFrom(this.http.get('http://localhost:13000/publications', {headers: {"Authorization": `Bearer ${token}`}}));
    this.profilePublications = data;
  }

}
