import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-existencia',
  templateUrl: './existencia.component.html',
  styleUrls: ['./existencia.component.scss']
})


export class ExistenciaComponent implements OnInit {

  constructor(private router: Router) {}

    gotoExistencia(){
        this.router.navigate(['/existencia']);  // define your component where you want to go
    }

  ngOnInit() {
  }

}
