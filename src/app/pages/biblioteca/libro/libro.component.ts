import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {

  constructor(private router: Router) {}

  open() {
    
    console.log('you tappe')
  }

  gotoExistencia(){
        this.router.navigate(['/pages/biblioteca/existencia']);
  }


  ngOnInit() {
  }

}
