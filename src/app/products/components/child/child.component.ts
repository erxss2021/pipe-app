import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent {

  @Output() mensajeDesdeHijo: EventEmitter<string> = new  EventEmitter<string>();

  mensaje: string = '';

  enviarMensaje(): void{
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

}
