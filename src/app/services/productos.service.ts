import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto, ProductoDetalle } from '../interfaces/productos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {

    this._cargarProductos();

  }

  private _cargarProductos() {

    return new Promise<void>( (resolve, reject ) => {

      this.http.get<Producto[]>('https://angular-html-8ef93-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( resp => {

        this.productos = resp;
        this.cargando = false;
        resolve();

      } );

    } );

  }

  getProduct( id: string ): Observable<ProductoDetalle> {
    return this.http.get<ProductoDetalle>(`https://angular-html-8ef93-default-rtdb.firebaseio.com/productos/${ id }.json`);
  }

  searchProduct( termino: string ) {

    if( this.productos.length === 0 ) {

      this._cargarProductos().then( () => {

        this._filtrarProductos( termino );

      } );

    } else {

      this._filtrarProductos( termino );

    }

  }

  private _filtrarProductos( termino: string ) {

    this.productosFiltrado = [];

    this.productos.forEach( prod => {

      if( prod.categoria.indexOf( termino ) >= 0 || prod.titulo.toLocaleLowerCase().indexOf( termino.toLocaleLowerCase() ) >= 0 ) {
        this.productosFiltrado.push( prod );
      }

    } );
    
  }

}
