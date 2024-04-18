import { Component } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';
import { PublicationsComponent } from '../../components/publications/publications.component';
import * as publicationData from '../../../assets/publications.json'

@Component({
  selector: 'app-wall',
  standalone: true,
  imports: [PostComponent,PublicationsComponent],
  templateUrl: './wall.component.html',
  styleUrl: './wall.component.css'
})
export class WallComponent {

  publicationsData = publicationData.publications

  constructor(){
    console.log(publicationData)
  }

}
