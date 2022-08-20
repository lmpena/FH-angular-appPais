import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap} from "rxjs/operators";

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country[];
  translations: any;
  
  // pais:Country=<Country>{
  //   "name": {
  //     "common": "Spain",
  //     "official": "Kingdom of Spain",
  //     "nativeName": {
  //         "spa": {
  //             "official": "Reino de España",
  //             "common": "España"
  //         }
  //     }
  //   },
  //   };
  
  constructor(private activatedRoute: ActivatedRoute,
              private paisService:PaisService) {
  }

  ngOnInit(): void {
  
      // this.activatedRoute.params
      //[0]   .subscribe( ({id}) => {
      //[0]     console.log('VerPaisComponent.params.id',id);
      //[0]     this.paisService.getPaisPorAlpha(id)  
      //[0]       .subscribe( pais => {
      //         console.log(pais);
      //         this.pais = pais;
      //       });
      //   });

      this.activatedRoute.params
          .pipe(
            switchMap( ({id}) => this.paisService.getPaisPorAlpha( id )),
            tap( console.log )
          )
          .subscribe ( pais => { 
            this.pais = pais;
            // console.log('translations -1-:', this.pais[0].translations);
            // console.log('translations -2- :',Object.values(this.pais[0].translations));
            this.translations=Object.values(this.pais[0].translations);
          } );


  }

}
