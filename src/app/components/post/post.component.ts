import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImage, faSmile } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  faImage = faImage;
  faSmile = faSmile;
  
  inputValue: string = '';
  publications: any[] = [];
  allPublications: any[] = publicationsData.publications;


  onEnter() {
    // Verificar que haya un valor en el input
    if (this.inputValue.trim() !== '') {
      // Nuevo objeto para agregar al arreglo de publicaciones
      const newPublication = {
        profile_img: 'https://lh3.googleusercontent.com/a/ACg8ocI_Fbnf1HIFWV45ZOmpyl3N7NsKPI8GJgE38aS51jtoYeVVZN6LKg=s96-c-rg-br100',
        profile_name: 'Facundo Vila',
        post_data: this.inputValue,
        post_img: 'none'
      };

      // Agregar el nuevo objeto al principio del arreglo
      this.allPublications.push(newPublication)

      // Limpiar el input después de agregar la publicación
      this.inputValue = '';
       console.log('Publications:', this.allPublications);
    }
  }
}

