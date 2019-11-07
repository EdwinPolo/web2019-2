import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  public areasForm: FormGroup;

  constructor(protected fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.areasForm = this.fb.group({
      code: ['test', Validators.required],
      description: ['test', Validators.required]
    });
  }

}
