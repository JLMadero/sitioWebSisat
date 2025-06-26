import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beneficios-camaras-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficios-camaras-component.component.html',
  styleUrl: './beneficios-camaras-component.component.css'
})
export class BeneficiosCamarasComponentComponent implements OnInit{
beneficios = [
    {
      titulo: 'Monitoreo en vivo',
      descripcion: 'Observa las operaciones en tiempo real para mejorar la seguridad y el control.',
      icono: '🎥'
    },
    {
      titulo: 'Evidencia visual',
      descripcion: 'Accede a grabaciones clave para soporte ante incidentes y decisiones críticas.',
      icono: '📸'
    },
    {
      titulo: 'Reducción de riesgos',
      descripcion: 'Previene robos, malas prácticas y accidentes en campo.',
      icono: '⚠️'
    },
    {
      titulo: 'Control operativo',
      descripcion: 'Supervisa rutas, tiempos y comportamiento del personal con visibilidad total.',
      icono: '🛰️'
    },
    {
      titulo: 'Soporte post-evento',
      descripcion: 'Consulta las grabaciones cuando lo necesites para aclarar eventos específicos.',
      icono: '🗂️'
    }
  ];

  visibles: boolean[] = [];

  ngOnInit(): void {
    this.iniciarAnimacion();
  }

  iniciarAnimacion() {
    this.visibles = Array(this.beneficios.length).fill(false);
    const orden = [...Array(this.beneficios.length).keys()];
    this.mostrarSecuencialmente(orden, () => {
      setTimeout(() => {
        this.ocultarSecuencialmente(orden, () => {
          this.shuffleArray(orden);
          setTimeout(() => this.iniciarAnimacion(), 1000);
        });
      }, 1000);
    });
  }

  mostrarSecuencialmente(indices: number[], callback: () => void) {
    indices.forEach((i, idx) => {
      setTimeout(() => {
        this.visibles[i] = true;
        if (idx === indices.length - 1) callback();
      }, idx * 2000);
    });
  }

  ocultarSecuencialmente(indices: number[], callback: () => void) {
    indices.forEach((i, idx) => {
      setTimeout(() => {
        this.visibles[i] = false;
        if (idx === indices.length - 1) callback();
      }, idx * 4000);
    });
  }

  shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
