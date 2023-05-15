import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  topnavVariant: boolean = false;
  @Input() transparent: boolean = false; //Estilos al padre
  @Input() hide: boolean = false;//Estilos al padre
  logoblanco:string="../../../assets/images/logo-letras-blancas.png";
  enlaces: MenuItem[] = [
    { routerLink: "/home", label: "Inicio", icon: "pi pi-home" }, //Introducción
    //{routerLink: "/work",label:"Nuestro trabajo"}, // oferecer servicio como gestores de material reciclable y apoyo a las empresas como consultores 
    { routerLink: "/work", label: "Nuestro trabajo", icon: "pi pi-briefcase", },
    { routerLink: "/portfolio", label: "Portafolio", icon: "pi pi-shopping-cart", },
    //Productos con el fin de mostrar el proceso de aprovechamiento con la madera y vender nuestros muebles
    { routerLink: "/about", label: "Nosotros", icon: "pi pi-user", },
    //mision vision valores corporativos, sede, nuestro equipo
    { routerLink: "/management", label: "Gestión Corporativa", icon: "pi pi-cog", },
    // Mostrar los reconocimientos ambientales y sociales logrados y reportes de gestion o sostenibilidad
    { routerLink: "/contact", label: "Contacto", icon: "pi pi-phone", },
  ];

  constructor(
    private readonly router: Router,
  ) {
    this.router.events
      .subscribe((event) => {
        if(event instanceof NavigationEnd) {
          const url: string = event.urlAfterRedirects;
          this.topnavVariant = url.startsWith("/home");
        }
      })
  }

  handleSearch(event: any) {
    //TODO: Completar busqueda
  }

  toggleMenu() {

  }
}
