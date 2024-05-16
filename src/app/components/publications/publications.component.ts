import { Component, Input, OnInit } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {

  clickedLike: boolean = false;
  allPublications: any;
  @Input() publicationsData: any[] = []
  @Input() profileData: any;
  
  getLike(clickedLike: boolean){
    this.clickedLike = clickedLike
  }

  constructor(private http: HttpClient){}

  async ngOnInit(): Promise<void> {
    const token = localStorage.getItem('token');
    const data = await lastValueFrom(this.http.get('http://localhost:13000/publications', {headers: {"Authorization": `Bearer ${token}`}}));
    this.allPublications = data
  }
}