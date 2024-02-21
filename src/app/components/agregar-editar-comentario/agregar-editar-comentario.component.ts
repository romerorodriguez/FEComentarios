import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from '../../interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {
 //aqui se usaran los formularios
 agregarComentario: FormGroup;
 accion = 'Agregar';
 id = 0;
 comentario: Comentario | undefined;

  constructor(private fb: FormBuilder,
              private _comentarioService: ComentarioService,
              private router: Router, 
              private aRoute: ActivatedRoute) { 
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required], //validamos que tenga esa información
      creador: ['', Validators.required ], //campo requerido para el nombre del autor
      texto: ['', Validators.required] 
    })
    this.id = +this.aRoute.snapshot.params.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar() {
    if (this.id !==  0) { //si el id no es cero entonces es editar
      this.accion = "Editar"; 
      this._comentarioService.getComentario(this.id).subscribe(data => {
        //console.log(data);
        this.comentario = data;
        this.agregarComentario.patchValue({
          titulo: data.titulo,
          texto: data.texto,
          creador: data.creador,
        }) //le asignamos al formulario los valores de la base de datos
      }, error => {
        console.log(error);
      })
    }
  }

  agregarEditarComentario() {
    if(this.comentario == undefined){
      //Agregar nuevo comentario
      const comentario : Comentario = {
        titulo: this.agregarComentario.get('titulo')?.value,
        creador: this.agregarComentario.get('creador')?.value,
        texto: this.agregarComentario.get('texto')?.value,
        fechaCreacion:  new Date
      }

      this._comentarioService.saveComentario(comentario).subscribe(data => {
        this.router.navigate(['/']); //redirecciona a la página principal una vez  que haya guardado el registro
      }, error => {
        console.log(error);
      })
    } else {
      //Editar un comentario
      const comentario : Comentario = {
        id: this.comentario.id,
        titulo: this.agregarComentario.get('titulo')?.value,
        creador: this.agregarComentario.get('creador')?.value,
        texto: this.agregarComentario.get('texto')?.value,
        fechaCreacion: this.comentario.fechaCreacion,
      }

      this._comentarioService.updateComentario(this.id, comentario).subscribe(data => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
      })
    }

  }

}
