import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beneficios-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficios-app.component.html',
  styleUrl: './beneficios-app.component.css'
})
export class BeneficiosAppComponent {
 beneficios = [
    {
      icono: '📍',
      titulo: 'Ubicación en tiempo real',
      descripcion: 'Visualiza la posición exacta de tus unidades desde cualquier lugar.'
    },
    {
      icono: '📦',
      titulo: 'Seguimiento de entregas',
      descripcion: 'Monitorea el estatus y progreso de cada envío.'
    },
    {
      icono: '📊',
      titulo: 'Métricas clave',
      descripcion: 'Consulta reportes y estadísticas desde la palma de tu mano.'
    },
    {
      icono: '🔔',
      titulo: 'Alertas instantáneas',
      descripcion: 'Recibe notificaciones inmediatas sobre eventos relevantes.'
    }
  ];
}
