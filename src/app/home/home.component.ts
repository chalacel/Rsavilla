import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dropsSections = [
    [
      {
        color: "#A5CE1C",
        text: "Es muy importante para nosotros que conozcas como funciona y opera nuestra empresa, ya que la transparencia de nuestros procesos son la clave para nuestros clientes",
        route: "/work",
        icon: "pi pi-briefcase",
      },
      {
        color: "#4A8CB0",
        text: "Te invitamos a conocer nuestros  productos y servicios. ¡Es vital para nostross brindarte la mejor experiencia acompañanos!",
        route: "/products",
        icon: "pi pi-shopping-cart",
      },
      {
        color: "#FB196F",
        text: "Somos una empresa comprometida con el medio ambiente, por lo cual nos preocupamos por tener siempre las mejores relaciones y reconocimientos que potencien nuestro crecimiento",
        route: "/about",
        icon: "pi pi-user",
      },
    ],
    [
      {
        color: "#C5B667",
        text: "Conoce mas sobre los procesos, la calidad y los materiales que utilizamos para el desarrollo de nuestros productos.",
        route: "/management",
        icon: "pi pi-cog",
      },
      {
        color: "#5D5D5F",
        text: "Contactanos por medio telefonico o cualquiera de nuestras redes y te ayudaremos a resolver tus dudas sobre nuestro trabajo y productos.",
        route: "/contact",
        icon: "pi pi-phone",
      },
    ]
  ]
}
