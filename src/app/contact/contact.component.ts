import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  nombreCompleto : string = '';
  primerApellido : string = '';
  segundoApellido : string = '';
  ciudad : string = '';
  telefono : string = '';
  email : string = '';
}
