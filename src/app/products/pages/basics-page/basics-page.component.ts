import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'eloy';
  public nameUpper: string = 'ELOY';
  public fullName: string = 'elOY sAnCHeZ sAlmOrAN';

  public customDate: Date = new Date();

}
