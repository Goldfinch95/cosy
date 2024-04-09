import { Component } from '@angular/core';
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

  publications: any[] = publicationsData.publications;
  
  constructor() {
    console.log(this.publications); // Verifica que estés obteniendo tus datos correctamente
  }

}


/*interface AllPublications{
  [key: string]: publication[];
}*/