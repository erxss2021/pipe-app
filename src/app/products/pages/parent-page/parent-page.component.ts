import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent-page.component.html',
  styles: [
  ]
})
export class ParentPageComponent {

  mensajeRecibido: string = '';

  recibirMensaje($event: string): void{
    this.mensajeRecibido = $event;
  }


}
