import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-oncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {


  //i18n Select
  public name : string = 'Eloy';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  changeClient():void{
    this.name = 'Renata';
    this.gender = "female";
  }

  //i18nPlural
  public clients: string[] = ['Renata', 'Ximena', 'Eloy', 'Angelica', 'Irma', 'Amelia', 'Eduardo'];
  
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.'
  };
  deleteClient(): void{
    this.clients.shift();
  }

  //KeyValue pipe
  public person = {
    name: 'Eloy',
    age: 39,
    address: 'Heroica ciudad de Tlaxiaco'
  };

  //Async pipe
  public myObservabletimer:Observable<number> = interval(2000)
  .pipe(
    tap( value => console.log('tap: ', value ) )
  );

  public promiseValue: Promise<string> = new Promise<string>( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Sanchez';
    }, 3500);
  } )
}
