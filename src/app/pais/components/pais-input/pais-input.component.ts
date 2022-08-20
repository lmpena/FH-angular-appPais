import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter    : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string>=new Subject();

  termino:string='';
  
  @Input() placeholder:string='';

  constructor() { }

  ngOnInit() {
    this.debouncer
        .pipe(debounceTime(300)) // No hagas suscribe hasta que el observable "debouncer" deje de emitir valores tras 300 ms
        .subscribe( valor => {
          console.log(valor);
          this.onDebounce.emit( valor ); // mandando el valor
      });
  }


  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada( event:any ) {
    const valor=event.target.value;
    // En el evento tenemos la misma info que en this.termino
    // console.log('valor',valor);
    // console.log('this.termino',this.termino);

    this.debouncer.next( this.termino );
  }

}
