import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private postsService: PostsService,
    private router: Router,
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required]),
      texto: new FormControl('', [
        Validators.required]),
      autor: new FormControl('', [
        Validators.required]),
      categoria: new FormControl('', [
        Validators.required]),
      fecha: new FormControl('', [
        Validators.required]),
      imagen: new FormControl('', [
        Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Crear un objeto fecha a partir de un string
    const fechaCreacion = new Date(this.formulario.value.createdAt);
    this.formulario.value.createdAt = fechaCreacion;
    // Mediante el servicio insertamos el nuevo post dentro del array
    this.postsService.create(this.formulario.value);
    // Navego hacia la ruta /posts
    this.router.navigate(['/posts']);
    // Si quiero crear un nuevo post
    this.formulario.reset();
  }

  checkError(fieldName: string, errorType: string) {
    return this.formulario.get(fieldName).hasError(errorType) && this.formulario.get(fieldName).touched;
  }
}