import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from '../../interfaces/Comentario';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {
 //aqui se usaran los formularios
 agregarComentario: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required], //validamos que tenga esa información
      creador: ['', Validators.required ], //campo requerido para el nombre del autor
      texto: ['', Validators.required] 
    })
  }

  ngOnInit(): void {
  }

  agregar() {
    //console.log(this.agregarComentario)

    const comentario : Comentario = {
      titulo:  this.agregarComentario.get('f_titulo')?.value,
      creador: this.agregarComentario.get('f_creador')?.value,
      texto: this.agregarComentario.get('F_texto')?.value,
      fechaCreacion:  new Date
    }

    //console.log(comentario);
  }

}
