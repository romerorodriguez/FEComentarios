import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {
//Arreglo donde se vacia el json
  listComentarios: Comentario [] = [];

  constructor(private _comentarioService: ComentarioService) { } //los guiones bajos significan que solo se haran servicios

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios() {
    this._comentarioService.getListComentarios().subscribe(data => {
      //console.log(data);
      this.listComentarios = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarComentario(id: any){
    console.log(id);
    this._comentarioService.deleteComentario(id).subscribe(data => {
      this.getComentarios();
    }, error => {
      console.log(error);
    })
  }

}
