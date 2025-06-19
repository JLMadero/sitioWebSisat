import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonios-paroute',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios-paroute.component.html',
  styleUrls: ['./testimonios-paroute.component.css']
})
export class TestimoniosParouteComponent {
  testimonios = [
    {
      mensaje: 'Paroute ha transformado por completo nuestra operación logística. ¡Lo recomiendo totalmente!',
      nombre: 'Mariana Torres',
      empresa: 'Grupo Rápido MX',
      imagen: 'assets/imgs/prueba.png'
    },
    {
      mensaje: 'Ahora asignamos rutas en minutos y monitoreamos todo en tiempo real. ¡Una maravilla!',
      nombre: 'Luis Hernández',
      empresa: 'Transportes del Norte',
      imagen: 'assets/imgs/prueba.png'
    },
    {
      mensaje: 'Con Paroute aumentamos nuestra eficiencia y redujimos tiempos de entrega considerablemente.',
      nombre: 'Laura Gómez',
      empresa: 'Distribuciones Sureste',
      imagen: 'assets/imgs/prueba.png'
    }
  ];
}

