import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  expanded = false;
  showSoluciones = false;
  showServicios = false;

  soluciones = [
    { label: 'Cámaras móviles', link: 'soluciones/camaras' },
    { label: 'GPS', link: 'soluciones/gps' },
    { label: 'Control de fluidos', link: 'soluciones/fluidos' },
    { label: 'Rastreo satelital', link: 'soluciones/rastreo' },
    { label: 'App móvil', link: 'soluciones/app' },
    { label: 'Última milla', link: 'soluciones/ultima-milla' },
    { label: 'Paroute', link: 'soluciones/paroute' },
    { label: 'Jigsaw', link: 'soluciones/jigsaw' },
    { label: 'Territory Design', link: 'soluciones/territory' },
  ];

  servicios = [
    { label: 'Paroute-Agilidad en tus rutas', link: 'servicios/paroute' },
    { label: 'Jigsaw', link: 'servicios/jigsaw' },
    { label: 'MsTrack', link: 'servicios/mstrack' },
    { label: 'Sisat.io', link: 'servicios/sisat' }
  ];

  constructor(private router: Router) {}

  toggleSidebar() {
    this.expanded = !this.expanded;
    if (!this.expanded) {
      this.showSoluciones = false;
      this.showServicios = false;
    }
  }

  toggleSoluciones() {
    this.showSoluciones = !this.showSoluciones;
  }

  toggleServicios() {
    this.showServicios = !this.showServicios;
  }

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }
}



