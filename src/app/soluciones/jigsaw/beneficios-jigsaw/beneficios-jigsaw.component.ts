import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beneficios-jigsaw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficios-jigsaw.component.html',
  styleUrl: './beneficios-jigsaw.component.css'
})
export class BeneficiosJigsawComponent {
  beneficios = [
    {
      titulo: 'Visualización en tiempo real',
      descripcion: 'Supervisa el consumo de diésel y rendimiento de cada unidad desde cualquier dispositivo.',
      icono: 'visibility'
    },
    {
      titulo: 'Alertas inteligentes',
      descripcion: 'Recibe notificaciones ante anomalías o comportamientos fuera de lo habitual.',
      icono: 'notification_important'
    },
    {
      titulo: 'Reportes detallados',
      descripcion: 'Genera informes sobre consumo, gasto y rendimiento con un solo clic.',
      icono: 'insert_chart'
    }
  ];
}
