import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  paises:Country[]=[];
  termino:string='';
  hayError:boolean=false;

  constructor(private paisService:PaisService) { 
  }

  buscar(termino:string){

    this.termino=termino;
    this.hayError=false;
    // console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
      .subscribe( paises => {
        console.log('*****PAISES*****',paises);
        this.paises=paises;
      }, (err) => {
        this.hayError=true;
        this.paises=[];
      });
  }

}
