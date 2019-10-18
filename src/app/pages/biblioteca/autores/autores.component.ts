import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  public titulo = "Formulario de autores"
  public nombre : String;
  public apellido : String;
  public fecha : String;
  public nacionalidad : String;

  constructor() { }

  ngOnInit() {
  }

  // Method to save form
  saveForm() {
    alert(this.nombre)
  }

}
