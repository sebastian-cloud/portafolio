import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private ActivatedRoute: ActivatedRoute,
                public ProductosService: ProductosService ) { }

  ngOnInit(): void {

    this.ActivatedRoute.params
    .subscribe( ( { termino } ) => {

      this.ProductosService.searchProduct( termino );
      
    } );

  }

}
