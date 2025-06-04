import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ClientesGafeteComponent } from '../clientes-gafete/clientes-gafete.component';
import { EmpresasTrenComponent } from '../empresas-tren/empresas-tren.component';
import { CarruselProyectosComponent } from '../carrusel-proyectos/carrusel-proyectos.component';




@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, ClientesGafeteComponent, EmpresasTrenComponent, CarruselProyectosComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1000ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})


export class InicioComponent implements AfterViewInit {
  soluciones = [
  { label: 'Paroute', link: 'soluciones/paroute', img: 'assets/imgs/paroute.svg' },
  { label: 'GPS', link: 'soluciones/gps', img: 'assets/imgs/paroute.svg' },
  { label: 'Control de fluidos', link: 'soluciones/fluidos', img: 'assets/imgs/paroute.svg' },
  { label: 'Rastreo satelital', link: 'soluciones/rastreo', img: 'assets/imgs/rastreo.svg' },
  { label: 'App móvil', link: 'soluciones/app', img: 'assets/imgs/app.svg' },
  { label: 'Última milla', link: 'soluciones/ultima-milla', img: 'assets/imgs/paroute.svg' },
  { label:  'Cámaras móviles', link: 'soluciones/camaras', img: 'assets/imgs/camaras.svg'},
  { label: 'Jigsaw', link: 'soluciones/jigsaw', img: 'assets/imgs/jigsaw.svg' },
  { label: 'Territory Design', link: 'soluciones/territory', img: 'assets/imgs/territory.svg' }
];

currentIndex = 0;
showContent = false;

ngAfterViewInit(): void {
  const night = document.querySelector('.night');
  if (night) {
    for (let i = 0; i < 20; i++) {
      const star = document.createElement('div');
      star.className = 'shooting_star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.opacity = `${Math.random() * 0.3 + 0.3}`;
      night.appendChild(star);
    }
  }

  // Oculta el preloader y muestra el contenido
  setTimeout(() => {
    this.showContent = true;
    this.startCarousel();
  }, 3000);
}

startCarousel() {
  setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.soluciones.length;
  }, 10000);
}

prev() {
  this.currentIndex = (this.currentIndex - 1 + this.soluciones.length) % this.soluciones.length;
}

next() {
  this.currentIndex = (this.currentIndex + 1) % this.soluciones.length;
}

}

