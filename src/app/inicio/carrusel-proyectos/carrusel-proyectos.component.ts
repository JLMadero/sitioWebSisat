import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-carrusel-proyectos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrusel-proyectos.component.html',
  styleUrls: ['./carrusel-proyectos.component.css'],
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
export class CarruselProyectosComponent implements AfterViewInit {
  soluciones = [
    { label: 'Paroute', link: '/soluciones/paroute', img: 'assets/imgs/paroute.svg', desc: 'Optimización de rutas y territorios.' },
    { label: 'GPS', link: '/soluciones/gps', img: 'assets/imgs/sisat.svg', desc: 'Monitoreo de unidades en tiempo real.' },
    { label: 'Rastreo satelital', link: '/soluciones/rastreo-satelital', img: 'assets/imgs/rastreo.svg', desc: 'Ubicación precisa y segura.' },
    { label: 'App móvil', link: '/soluciones/app', img: 'assets/imgs/app.svg', desc: 'Control total desde tu celular.' },
    { label: 'Cámaras móviles', link: '/soluciones/camaras', img: 'assets/imgs/camaras.svg', desc: 'Supervisión visual de unidades.' },
    { label: 'Jigsaw', link: '/soluciones/jigsaw', img: 'assets/imgs/jigsaw.svg', desc: 'Control total de consumo de diésel.' },
    { label: 'Territory Design', link: '/soluciones/territory', img: 'assets/imgs/territory.svg', desc: 'Diseño inteligente de zonas.' }
  ];

  slideIndex = 0;
  slides: any[][] = [];
  showContent = false;

  ngOnInit() {
    const porSlide = 3;
    for (let i = 0; i < this.soluciones.length; i += porSlide) {
      this.slides.push(this.soluciones.slice(i, i + porSlide));
    }
  }

  ngAfterViewInit(): void {
    this.showContent = true;
  }

  prev() {
    this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
  }

  next() {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
  }
}


