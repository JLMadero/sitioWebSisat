import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  soluciones = [
    { label: 'Cámaras móviles', link: 'soluciones/camaras' },
    { label: 'Rastreo satelital', link: 'soluciones/rastreo-satelital' },
    { label: 'App móvil', link: 'soluciones/app' },
    { label: 'Paroute', link: 'soluciones/paroute' },
    { label: 'Jigsaw', link: 'soluciones/jigsaw' },
    { label: 'Territory Design', link: 'soluciones/territory' },
  ];

  servicios = [
    { label: 'Paroute-Agilidad en tus rutas', link: "https://webapp.paroute.com/", external: true },
    { label: 'Jigsaw', link: "https://fuel.jigsawm2m.com/Unsecured/Login.aspx", external: true },
    { label: 'MsTrack', link: "https://mstwebsis.mstrack.com/login", external: true },
    { label: 'Sisat.io', link: "http://sisat.io/", external: true }
  ];

  constructor(private router: Router) { }

  navigate(path: string, external = false) {
    if (external) {
      window.open(path, '_blank');
    } else {
      this.router.navigate([path]);
    }
  }
  

}







