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

  constructor(private httpClient: HttpClient) {
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

  ngOnInit(): void {}

  enviarEmail(): void {
    let params = {};

    if (this.formularioContacto.value) {
      const {
        nombreCompleto,
        primerApellido,
        segundoApellido,
        ciudad,
        telefono,
        email,
        detalle,
      } = this.formularioContacto.value;

      params = {
        nombreCompleto,
        primerApellido,
        segundoApellido,
        ciudad,
        telefono,
        email,
        detalle,
      };
    }
    this.httpClient
      .post('https://envio-email.vercel.app/api/sendMail', params)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
