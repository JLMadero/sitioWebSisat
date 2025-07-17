import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diferenciadores-territory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diferenciadores-territory.component.html',
  styleUrl: './diferenciadores-territory.component.css'
})
export class DiferenciadoresTerritoryComponent {
 diferenciadores = [
    { titulo: 'Zonificación inteligente', descripcion: 'Asigna zonas con base en geografía, capacidad y cobertura óptima.' },
    { titulo: 'Precisión geoespacial', descripcion: 'Integración avanzada con mapas y datos reales para resultados más exactos.' },
    { titulo: 'Ajustes flexibles', descripcion: 'Reconfigura zonas dinámicamente ante cambios de demanda o personal.' },
    { titulo: 'Visualización interactiva', descripcion: 'Explora zonas y rutas desde una interfaz amigable y profesional.' },
  ];
}
