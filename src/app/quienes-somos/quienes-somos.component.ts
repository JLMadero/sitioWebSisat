import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  aliados = [
    'assets/imgs/google.jpg',
    'assets/imgs/microsoft.jpg',
    'assets/imgs/jigsawNosotros.png',
    'assets/imgs/caiAmp.jpg'
  ];
  valores = [
    {
      icono: 'assets/imgs/innovacion.png',
      titulo: 'Innovación',
      descripcion: 'Transformamos ideas complejas en soluciones ágiles y funcionales.'
    },
    {
      icono: 'assets/imgs/confianza.png',
      titulo: 'Confianza',
      descripcion: 'Crecemos con nuestros clientes construyendo relaciones a largo plazo.'
    },
    {
      icono: 'assets/imgs/impacto.png',
      titulo: 'Impacto',
      descripcion: 'Nuestro software ayuda a ahorrar combustible, tiempo y recursos.'
    }
  ];

}

