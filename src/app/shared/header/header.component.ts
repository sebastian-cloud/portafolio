import { Component, OnInit } from '@angular/core';
import { DataPaginaService } from '../../services/data-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public service: DataPaginaService ) { }

  ngOnInit(): void {
  }

}
