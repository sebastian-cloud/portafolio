import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataPagina, Member } from '../interfaces/data-paginas.interface';

@Injectable({
  providedIn: 'root'
})
export class DataPaginaService {

  info: DataPagina = {};
  members!: Member[];
  cargada = false;

  constructor( private http: HttpClient ) {

    this._getInfo();
    this._getMembers();    

  }
  private _getInfo(): void {

    this.http.get<DataPagina>('assets/data/data-pagina.json')
    .subscribe( resp => {

      this.cargada = true;
      this.info = resp;

    } );
    
  }

  private _getMembers(): void {

    this.http.get<Member[]>('https://angular-html-8ef93-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( members => {

      this.members = members;

    } );

  }

}
