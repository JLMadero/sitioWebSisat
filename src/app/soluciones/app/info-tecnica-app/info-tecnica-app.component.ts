import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-tecnica-app',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './info-tecnica-app.component.html',
  styleUrl: './info-tecnica-app.component.css'
})
export class InfoTecnicaAppComponent {
pasos = [
    { icono: '📲', titulo: 'Descarga e inicia sesión', descripcion: 'Accede con tus credenciales desde tu smartphone o tablet.' },
    { icono: '🧭', titulo: 'Visualiza en tiempo real', descripcion: 'Consulta ubicación, entregas y eventos desde un solo lugar.' },
    { icono: '📷', titulo: 'Evidencia de entrega', descripcion: 'Captura fotos, firmas y comentarios del cliente.' },
    { icono: '📡', titulo: 'Enlace directo con operación', descripcion: 'Toda la información sincronizada al instante con tu sistema central.' }
  ];

  @ViewChildren('step') steps!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    this.steps.forEach(step => observer.observe(step.nativeElement));
  }
}
