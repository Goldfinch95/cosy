import { Component, Input } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { PostCardComponent } from '../../components/post-card/post-card.component';


@Component({
  selector: 'app-users-publications',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './users-publications.component.html',
  styleUrl: './users-publications.component.css'
})
export class UsersPublicationsComponent {


  @Input() userProfile: any;
  @Input() userName: string = '';
  @Input() lastName: string = '';

  userProfilePublications: any;

  constructor(private http: HttpClient){}

  async ngOnInit(): Promise<void> {
    const token = localStorage.getItem('token');
    const data = await lastValueFrom(this.http.get('http://localhost:13000/publications', {headers: {"Authorization": `Bearer ${token}`}}));
    console.log(data)
    console.log(this.userName, this.lastName)
    console.log(this.userProfile.name, this.userProfile.lastName)
    this.userProfilePublications = data;
  }

}
