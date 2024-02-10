//propios de angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarComentarioComponent,
    VerComentarioComponent,
    ListComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule //se activa de forma dinamica el agregar-editar-comentario
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
