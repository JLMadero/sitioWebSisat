import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonios-territory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios-territory.component.html',
  styleUrl: './testimonios-territory.component.css'
})
export class TestimoniosTerritoryComponent {
testimonios = [
    {
      nombre: 'María González',
      empresa: 'Logística Rápida',
      mensaje: 'Gracias a Territory Design, logramos optimizar la distribución y reducir los tiempos de entrega en más del 30%.'
    },
    {
      nombre: 'Carlos Pérez',
      empresa: 'Transporte Express',
      mensaje: 'Implementar esta solución nos ayudó a tomar decisiones más inteligentes sobre nuestros territorios de venta.'
    },
    {
      nombre: 'Laura Martínez',
      empresa: 'Distribuciones Norte',
      mensaje: 'Una herramienta visual, poderosa y fácil de usar. Nuestro equipo comercial ahora trabaja con más eficiencia.'
    }
  ];
}
