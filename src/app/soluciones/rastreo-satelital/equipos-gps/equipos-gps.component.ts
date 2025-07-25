import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Equipo {
  nombre: string;
  imagen: string;
  descripcion: string;
  especificaciones: string[];
}

@Component({
  selector: 'app-equipos-gps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipos-gps.component.html',
  styleUrl: './equipos-gps.component.css'
})
export class EquiposGpsComponent {
categoriaSeleccionada: 'gps' | 'sensores' | 'camaras' = 'gps';
  equipoSeleccionado: Equipo | null = null;

  equipos: Record<'gps' | 'sensores' | 'camaras', Equipo[]> = {
    gps: [
      {
        nombre: 'CalAmp iOn Tag',
        imagen: 'assets/imgs/equipos-gps/calmamp.png',
        descripcion: '¡Lo último en innovación! Sensores inteligentes de proximidad para monitorear, analizar datos, movimientos y alertas.',
        especificaciones: ['Batería de larga duración', 'Compatible con plataformas', 'Fácil instalación']
      },
      {
        nombre: 'LMU-4233',
        imagen: 'assets/imgs/equipos-gps/lmu-4233.png',
        descripcion: 'Equipo con telemetría para sensores y CANBUS con flexibilidad óptima.',
        especificaciones: ['Telemetría avanzada', 'Compatibilidad con CANBUS', 'Compacto y robusto']
      },
      {
        nombre: 'LMU-3030 LTE CAT-1',
        imagen: 'assets/imgs/equipos-gps/lmu-3030.png',
        descripcion: 'Telemática OBDII con LTE CAT-1 para conectar vehículos de forma sencilla.',
        especificaciones: ['LTE CAT-1', 'Conexión OBDII', 'Instalación rápida']
      },
      {
        nombre: 'LMU-330',
        imagen: 'assets/imgs/equipos-gps/lmu-330.png',
        descripcion: 'Compacto, discreto y seguro para rastreo vehicular.',
        especificaciones: ['Diseño compacto', 'Fácil instalación', 'Funcionalidad esencial']
      },
      {
        nombre: 'LMU-1230 Weatherproof',
        imagen: 'assets/imgs/equipos-gps/lmu-1230.png',
        descripcion: 'Uso rudo, resistente al agua y condiciones adversas.',
        especificaciones: ['Resistente al agua', 'Uso rudo', 'Ideal para remolques']
      },
      {
        nombre: 'LMU-2630',
        imagen: 'assets/imgs/equipos-gps/lmu-2630.png',
        descripcion: 'Administración de flotas con múltiples capacidades de telemetría.',
        especificaciones: ['Alta capacidad', 'Telemetría completa', 'Control de flotas']
      }
    ],
    sensores: [
      {
        nombre: 'TD-150',
        imagen: 'assets/imgs/equipos-gps/td-150.png',
        descripcion: 'Sensor de combustible para tractocamiones y vehículos de uso rudo.',
        especificaciones: ['Detección de nivel de combustible', 'Uso rudo', 'Alertas en tiempo real']
      }
    ],
    camaras: [
      {
        nombre: 'EM500NH-P4',
        imagen: 'assets/imgs/equipos-gps/em500nh-p4.png',
        descripcion: 'Vigilancia discreta con imágenes de 550 TVL.',
        especificaciones: ['550 TVL', 'Diseño discreto', 'Alta resolución']
      },
      {
        nombre: 'EMW-330',
        imagen: 'assets/imgs/equipos-gps/emw-330.png',
        descripcion: 'Uso rudo, 520 TVL, ideal para exteriores y baja iluminación.',
        especificaciones: ['520 TVL', 'Uso rudo', 'Baja iluminación']
      },
      {
        nombre: 'EMD-300',
        imagen: 'assets/imgs/equipos-gps/emd-300.png',
        descripcion: 'Mini domo móvil con imágenes claras hasta 550 TVL.',
        especificaciones: ['550 TVL', 'Mini domo móvil', 'Ideal para vigilancia']
      }
    ]
  };

  seleccionarCategoria(categoria: 'gps' | 'sensores' | 'camaras') {
    this.categoriaSeleccionada = categoria;
    this.equipoSeleccionado = null;
  }

  abrirDetalles(equipo: Equipo) {
    this.equipoSeleccionado = equipo;
  }

  cerrarDetalles() {
    this.equipoSeleccionado = null;
  }
}
