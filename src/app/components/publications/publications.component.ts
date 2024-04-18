import { Component, Input } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';




@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {

  clickedLike: boolean = false;
  @Input() publicationsData: any[] = []
  
  
  getLike(clickedLike: boolean){
    this.clickedLike = clickedLike
  }
  
}