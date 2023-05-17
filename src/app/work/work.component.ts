import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  materials = [
    {
      title: "Madera",
      items: [
        "Madera de diferente medida",
        "Estibas",
        "Tablas",
        "Tablones",
      ],
      image: "../../assets/images/work/madera.jpg",
      alt: "Madera"
    },
    {
      title: "Plástico",
      items: [
        "Botellas",
        "Retal",
        "Tapas",
        "Bolsa",
      ],
      image: "../../assets/images/work/plastico.png",
      alt: "Plástico"
    },
    {
      title: "Cartón",
      items: [
        "Cajas de diferentes tamaños",
        "Láminas de cartón",
        "Plegadiza",
        "Tetra Pack",
        "Polyboard",
      ],
      image: "../../assets/images/work/carton.png",
      alt: "Cartón"
    },
    {
      title: "Papel",
      items: [
        "Archivo",
        "Periódico",
        "Kraft",
      ],
      image: "../../assets/images/work/papel.png",
      alt: "Papel"
    },
    {
      title: "Material Metálico",
      items: [
        "Aluminio",
        "Hierro",
        "Otros",
      ],
      image: "../../assets/images/work/material_metálico.png",
      alt: "Material Metálico"
    }
  ];
}
