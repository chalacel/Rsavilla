import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  formularioContacto: FormGroup;

  constructor(private httpClient : HttpClient) {
    this.formularioContacto = new FormGroup({
      nombreCompleto: new FormControl('', [Validators.required]),
      primerApellido: new FormControl('', [Validators.required]),
      segundoApellido: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      detalle: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() : void {

  }

  enviarEmail() : void {
    let params = {
      nombreCompleto  :  this.formularioContacto.value.nombreCompleto,
      primerApellido : this.formularioContacto.value.primerApellido,
      segundoApellido : this.formularioContacto.value.segundoApellido,
      ciudad : this.formularioContacto.value.ciudad,
      telefono : this.formularioContacto.value.telefono,
      email : this.formularioContacto.value.email,
      detalle : this.formularioContacto.value.detalle,
    }
      this.httpClient.post('https://envio-email.vercel.app/api/sendMail', params).subscribe(resp=>{
        console.log(resp);
      });
  }

}
