import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  public autoresForm: FormGroup;

  public titulo = "Formulario de autores"
  public nombre : String;
  public apellido : String;
  public fecha : String;
  public nacionalidad : String;

  constructor(protected fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.autoresForm = this.fb.group({
      code: ['test', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      bd_year : ['test', Validators.required], //Fecha de Nacimiento
      death_year: ['', Validators.required], //Fecha de muerte
      bd_place: ['', Validators.required] //Lugar de Nacimiento
    });
  }

  // Method to save form
  saveForm() {
    alert(this.nombre)
  }

}
