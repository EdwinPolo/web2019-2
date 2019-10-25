import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {

  public editorialForm: FormGroup;

  constructor(protected fb: FormBuilder) { }

  ngOnInit() {
  }

  createForm() {
    this.editorialForm = this.fb.group({
      codigo: 'hdf',
      nombre: 'dfghdfh',
      fecha_nacimiento: 'gfhdfh'

    });
  }

}
