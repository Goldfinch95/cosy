import { Component, Input} from '@angular/core';
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

  inputValue = '';
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;

  @Input() publicationsData: any;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.getImageUrl(); // Llamar a getImageUrl() después de seleccionar el archivo
  }
  

  onEnter(){
    if (this.inputValue === ''){
      return
    }
    const AllPublications = this.publicationsData
    const newData = {
      profile_img: "https://avatars.githubusercontent.com/u/104276119?v=4",
      profile_name: "Facundo Vila",
      post_data: this.inputValue,
      post_img: this.selectedFile ? URL.createObjectURL(this.selectedFile) : null
    };
    this.inputValue = ''
    this.selectedFile = null;
  this.selectedFileDataUrl = null;
    AllPublications.push(newData)
  }

  getImageUrl(){
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedFileDataUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}

/*export interface Publication {
  profile_img: string;
  profile_name: string;
  post_data: string;
  post_img: string;
}*/



  // Crear nuevo objeto con los datos nuevos
  

  // Agregar el nuevo objeto al array de publicaciones
  // Mostrar la copia actualizada en la consola
  

