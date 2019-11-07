import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {

  public editorialForm: FormGroup;

  //this was a test 
  public profileForm = new FormGroup({
    code: new FormControl('algo'),
    description: new FormControl('algo 2'),
    country: new FormControl('algo 2'),
  });

  constructor(protected fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.editorialForm = this.fb.group({
      code: ['test1', Validators.required],
      description: ['test2', Validators.required],
      country: ['test3', Validators.required]
    });
  }

}
