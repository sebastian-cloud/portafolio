import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ProductosService } from '../../services/productos.service';
import { ProductoDetalle } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: string = '';
  producto!: ProductoDetalle;

  constructor( private activatedRoute: ActivatedRoute,
                private ProductosService: ProductosService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      map( ( { id } ) => this.id = id ),
      switchMap( ( { prev } ) => this.ProductosService.getProduct( this.id ) )
    )
    .subscribe( resp => {
      console.log( resp );
      this.producto = resp;
    } );

  }

}
