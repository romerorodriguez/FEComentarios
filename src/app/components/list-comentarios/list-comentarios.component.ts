import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentario';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {
//Arreglo donde se vacia el json
  listComentarios: Comentario [] = [
    {
      titulo: 'Angular', 
      creador: 'Fernando Rivera', 
      fechaCreacion: new Date(), 
      texto: 'Framework para crear SPA'
    },
    {
      titulo: 'React',
      creador: 'Claudia Saldivar',
      fechaCreacion: new Date(),
      texto: `Libreria para crear SPA`
    },
    {
      titulo: 'VUE',
      creador:  'Octavio Senties',
      fechaCreacion:  new Date(),
      texto:  'Framework progresivo para crear SPA'
    },
    {
      titulo: 'Python',
      creador: 'Willian Stone',
      fechaCreacion: new Date(''),
      texto: 'Lenguaje de programación'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
