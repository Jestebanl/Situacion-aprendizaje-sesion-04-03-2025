import { Component, ViewEncapsulation } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-api-page',
  imports: [NgFor],
  templateUrl: './api-page.component.html',
  styleUrl: './api-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export default class ApiPageComponent {

  public datos:any[]=[];
  constructor(private servicio:ApiServiceService) { }

  ngOnInit(): void {
    this.servicio.getDatos().subscribe(
      (datos) => {
        this.datos=datos;
      });
  }

}
