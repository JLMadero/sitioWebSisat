import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-beneficios-territory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficios-territory.component.html',
  styleUrl: './beneficios-territory.component.css'
})
export class BeneficiosTerritoryComponent {
  beneficios = [
    { icon: '📍', titulo: 'Territorios Equitativos', descripcion: 'Diseña zonas de trabajo equilibradas para mejorar eficiencia y rendimiento.' },
    { icon: '🚗', titulo: 'Rutas Óptimas', descripcion: 'Reduce tiempos de traslado y maximiza cobertura geográfica.' },
    { icon: '📊', titulo: 'Datos Estratégicos', descripcion: 'Toma decisiones basadas en mapas y análisis inteligentes.' },
    { icon: '⚙️', titulo: 'Automatización', descripcion: 'Simplifica el proceso de diseño territorial con herramientas intuitivas.' },
    { icon: '📈', titulo: 'Incrementa Productividad', descripcion: 'Asigna zonas eficientes que reducen carga de trabajo innecesaria.' },
    { icon: '🧠', titulo: 'Inteligencia Comercial', descripcion: 'Localiza oportunidades y clientes potenciales con segmentación avanzada.' }
  ];
}
