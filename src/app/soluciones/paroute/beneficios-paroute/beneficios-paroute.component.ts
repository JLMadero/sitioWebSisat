import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beneficios-paroute',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficios-paroute.component.html',
  styleUrl: './beneficios-paroute.component.css'
})
export class BeneficiosParouteComponent {
valores = [
    { icono: 'assets/imgs/optimizacion.png', titulo: 'Optimización', texto: 'Planeación inteligente de rutas para reducir tiempo y costos.' },
    { icono: 'assets/imgs/analisis.png', titulo: 'Análisis de datos', texto: 'Reportes y métricas en tiempo real para decisiones acertadas.' },
    { icono: 'assets/imgs/usuario.svg', titulo: 'Experiencia de usuario', texto: 'Interfaz intuitiva para una adopción rápida por parte del equipo.' },
    { icono: 'assets/imgs/seguridad.png', titulo: 'Seguridad', texto: 'Control total de tu operación con acceso segmentado.' },
  ];

}
