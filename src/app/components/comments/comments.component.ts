import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PerfilService } from '../../perfil.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  inputValue = '';
  @Input() publicationComment!: any[];
  perfilData: any;

  
  
  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
   console.log(this.publicationComment[0].content)
  }

  /*onEnter(){
    if (this.inputValue === ''){
      return
    };
    this.allpublications = this.comments
    const newComment = {
      profile_img: this.perfilData[0].apellido,
      profile_name: this.perfilData[0].nombre,
      comment: this.inputValue
    };
    this.allpublications.push(newComment)
    this.inputValue = '';
  }*/
  
}
