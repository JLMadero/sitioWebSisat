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
  // ✅ Estas eran las propiedades faltantes
  expanded = false;
  showSoluciones = false;
  showServicios = false;

  // ✅ Estas listas también eran necesarias
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
  { label: 'Paroute-Agilidad en tus rutas', link: "https://webapp.paroute.com/" },
  { label: 'Jigsaw', link: "https://mstwebsis.mstrack.com/login" },
  { label: 'MsTrack', link: "http://sisat.io/" },
  { label: 'Sisat.io', link: "https://fuel.jigsawm2m.com/Unsecured/Login.aspx" }
];


  constructor(private router: Router) {}

  toggleSidebar() {
    this.expanded = !this.expanded;

    // Al cerrar, ocultamos también los submenús
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

  navigate(link: string) {
  if (link.startsWith('http')) {
    window.open(link, '_blank');
  } else {
    this.router.navigateByUrl(link);
  }
}

}





