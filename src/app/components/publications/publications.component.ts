import { Component, EventEmitter, Output  } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import * as publicationsData from '../../../assets/publications.json';



@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {

  clickedLike: boolean = false;
  allPublications: any[] = publicationsData.publications;

  
  getLike(clickedLike: boolean){
    this.clickedLike = clickedLike
    console.log(this.clickedLike)
  }
  
}


/*interface AllPublications{
  [key: string]: publication[];
}*/