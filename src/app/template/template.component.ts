import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoLibro(){
    this.router.navigate(['/pages/biblioteca/libro']);
}

}
