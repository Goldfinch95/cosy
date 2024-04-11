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

  allPublications: any[] = publicationsData.publications;

  
  
  
}


/*interface AllPublications{
  [key: string]: publication[];
}*/