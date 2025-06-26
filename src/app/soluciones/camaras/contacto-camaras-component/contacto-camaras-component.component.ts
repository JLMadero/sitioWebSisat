import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto-camaras-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto-camaras-component.component.html',
  styleUrl: './contacto-camaras-component.component.css'
})
export class ContactoCamarasComponentComponent {
testimonios = [
    {
      mensaje: "Las cámaras móviles han sido clave para supervisar en tiempo real nuestras unidades.",
      nombre: "Carlos Méndez",
      empresa: "LogiTrack MX"
    },
    {
      mensaje: "Gracias a SISAT, ahora tenemos evidencia visual confiable en todo momento.",
      nombre: "Ana Ramírez",
      empresa: "Transporte Sureste"
    },
    {
      mensaje: "La visibilidad que ofrecen estas cámaras nos ha permitido tomar mejores decisiones.",
      nombre: "Jorge Salinas",
      empresa: "Distribuciones Norte"
    }
  ];
}
