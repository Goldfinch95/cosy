import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  comments = [
    {
      profile_img: "https://avatars.githubusercontent.com/u/1561955?v=4",
      profile_name: "Miguel Angel Duran",
      comment: "Impresionante sesión de sparring. Ambos boxeadores están mostrando un gran nivel de técnica y resistencia."
    },
    {
      profile_img: "https://avatars.githubusercontent.com/u/6494462?v=4",
      profile_name: "Gonzalo Pozzo",
      comment: "Es genial ver cómo están trabajando en equipo para mejorar. El compañerismo en el boxeo es inspirador."
    },
    {
      profile_img: "https://avatars.githubusercontent.com/u/15913811?v=4",
      profile_name: "Carmen Ansio",
      comment: "El entrenador está dando excelentes consejos para ajustar la estrategia. Esto es lo que hace que el gimnasio sea tan valioso."
    },
    {
      profile_img: "https://avatars.githubusercontent.com/u/90206336?v=4",
      profile_name: "Julian Ajras",
      comment: "Cada golpe tiene un propósito claro. Se nota que están enfocados en mejorar y aprender."
    },
  ]
  
}
