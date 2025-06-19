import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-funcionamiento-paroute',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funcionamiento-paroute.component.html',
  styleUrls: ['./funcionamiento-paroute.component.css']
})
export class FuncionamientoParouteComponent implements OnInit, OnDestroy {
  pasos = [
    {
      icono: 'assets/imgs/carga.png',
      titulo: 'Carga de información',
      descripcion: 'Sube rutas, clientes y unidades desde tu ERP o Excel.'
    },
    {
      icono: 'assets/imgs/optimizacion.png',
      titulo: 'Optimización de rutas',
      descripcion: 'El sistema diseña rutas eficientes considerando tiempos, zonas y capacidades.'
    },
    {
      icono: 'assets/imgs/usuario.svg',
      titulo: 'Asignación inteligente',
      descripcion: 'Distribuye tareas de manera automática a cada unidad o conductor.'
    },
    {
      icono: 'assets/imgs/monitoreo.svg',
      titulo: 'Ejecución y monitoreo',
      descripcion: 'Sigue el progreso en tiempo real desde cualquier dispositivo.'
    },
    {
      icono: 'assets/imgs/analisisInteligente.svg',
      titulo: 'Análisis y mejora',
      descripcion: 'Obtén métricas clave para seguir mejorando tus operaciones.'
    }
  ];

  pasoActivo = 0;
  private timer: any;

  ngOnInit(): void {
    this.iniciarAnimacionCiclica();
  }

  iniciarAnimacionCiclica() {
    this.timer = setInterval(() => {
      this.pasoActivo = (this.pasoActivo + 1) % this.pasos.length;
    }, 2200); // duración de animación + breve descanso
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}


