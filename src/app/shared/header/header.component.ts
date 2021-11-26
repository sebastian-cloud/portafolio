import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataPaginaService } from '../../services/data-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public service: DataPaginaService,
                private router: Router ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ) {

    if( termino.length < 1 ) {

      return;

    }

    this.router.navigate( [ '/search', termino ] );

  }

}
