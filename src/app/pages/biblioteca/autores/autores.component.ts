import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  public autoresForm: FormGroup;
  public authors: any 

  public titulo = "Formulario de autores";
  public nombre : String;
  public apellido : String;
  public fecha : String;
  public nacionalidad : String;

  constructor(protected fb: FormBuilder, protected service: AuthorService) { 
    this.createForm()
  }

  ngOnInit() {
    this.service.getAuthors().subscribe(data => {
      this.authors = data
    })
  }

  saveAuthor() {
    this.service.postAuthor(this.autoresForm.value).subscribe(data => alert("listo"))
  }

  createForm() {
    this.autoresForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      bd_year : ['', Validators.required], //Fecha de Nacimiento
      death_year: ['', Validators.required], //Fecha de muerte
      bd_place: ['', Validators.required] //Lugar de Nacimiento
    });
  }

  // Method to save form
  saveForm() {
    alert(this.nombre)
  }

}
