import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/productos.interface';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos!: Producto[];
  cargando = true;

  constructor( private http: HttpClient ) {

    this._cargarProductos();

  }

  private _cargarProductos() {

    this.http.get<Producto[]>('https://angular-html-8ef93-default-rtdb.firebaseio.com/productos_idx.json')
    .pipe(
      delay( 1000 )
    )
    .subscribe( resp => {

      this.productos = resp;
      this.cargando = false;

    } );

  }

}
