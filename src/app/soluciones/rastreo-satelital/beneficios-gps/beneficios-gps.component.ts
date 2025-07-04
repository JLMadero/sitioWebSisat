import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beneficios-gps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficios-gps.component.html',
  styleUrl: './beneficios-gps.component.css'
})
export class BeneficiosGpsComponent {
  beneficios = [
    { icon: '📡', titulo: 'Monitoreo en Tiempo Real', descripcion: 'Visualiza la ubicación de tus unidades en cualquier momento.' },
    { icon: '🔒', titulo: 'Seguridad y Control', descripcion: 'Protege tu flota con alertas y reportes en tiempo real.' },
    { icon: '📊', titulo: 'Reportes Inteligentes', descripcion: 'Analiza los recorridos y mejora la eficiencia operativa.' },
    { icon: '⚡', titulo: 'Alertas Inmediatas', descripcion: 'Recibe notificaciones ante desvíos, excesos de velocidad o paradas no autorizadas.' },
    { icon: '💰', titulo: 'Reducción de Costos', descripcion: 'Optimiza rutas y reduce gastos operativos y de combustible.' },
    { icon: '🌐', titulo: 'Acceso Multiplataforma', descripcion: 'Control total desde tu computadora o dispositivo móvil.' }
  ];
}
