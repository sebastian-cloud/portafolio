import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataPagina } from '../interfaces/data-paginas.interface';

@Injectable({
  providedIn: 'root'
})
export class DataPaginaService {

  info: DataPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {

    console.log( 'Hello from service!' );

    this.http.get<DataPagina>('assets/data/data-pagina.json')
    .subscribe( resp => {

      this.cargada = true;
      this.info = resp;
      console.log( resp )

    } );

  }

}
