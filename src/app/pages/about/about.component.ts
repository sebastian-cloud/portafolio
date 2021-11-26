import { Component, OnInit } from '@angular/core';
import { Member } from '../../interfaces/data-paginas.interface';
import { DataPaginaService } from '../../services/data-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public service: DataPaginaService ) { }

  ngOnInit(): void {

  }

}
