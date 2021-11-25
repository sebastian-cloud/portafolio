import { Component } from '@angular/core';
import { DataPaginaService } from './services/data-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private service: DataPaginaService ) {

  }

}
