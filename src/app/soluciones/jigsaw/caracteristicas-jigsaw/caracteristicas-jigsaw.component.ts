import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caracteristicas-jigsaw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caracteristicas-jigsaw.component.html',
  styleUrl: './caracteristicas-jigsaw.component.css'
})
export class CaracteristicasJigsawComponent implements AfterViewInit{
pasos = [
    { icono: '⚙️', titulo: 'Configuración inicial', descripcion: 'Se ajustan los parámetros de monitoreo y consumo.', visible: false },
    { icono: '📡', titulo: 'Recolección de datos', descripcion: 'Se recopilan datos desde sensores en tiempo real.', visible: false },
    { icono: '📊', titulo: 'Procesamiento inteligente', descripcion: 'El sistema interpreta los datos recolectados.', visible: false },
    { icono: '🧠', titulo: 'Análisis y alertas', descripcion: 'Se generan alertas preventivas y recomendaciones.', visible: false },
    { icono: '📈', titulo: 'Optimización continua', descripcion: 'Se optimizan procesos basados en el rendimiento.', visible: false }
  ];

  @ViewChildren('stepEl', { read: ElementRef }) stepElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const index = this.stepElements.toArray().findIndex(el => el.nativeElement === entry.target);
        if (index !== -1) {
          this.pasos[index].visible = entry.isIntersecting;
        }
      });
    }, {
      threshold: 0.2
    });

    this.stepElements.forEach(step => observer.observe(step.nativeElement));
  }
}
