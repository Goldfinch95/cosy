import { Component, EventEmitter, Output  } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import * as publicationsData from '../../../assets/publications.json';
import { PostComponent } from '../post/post.component';


@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [PostCardComponent, PostComponent],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {

  allPublications: any[] = publicationsData.publications;
  
  @Output() publicationSelected = new EventEmitter<any>()
  
  constructor() {
    console.log(this.allPublications);
  }

  ngOnInit(publication: any): void {
    
    this.allPublications = publication.slice().reverse(); 
  }
}


/*interface AllPublications{
  [key: string]: publication[];
}*/