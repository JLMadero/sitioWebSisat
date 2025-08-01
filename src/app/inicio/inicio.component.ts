import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ClientesGafeteComponent } from './clientes-gafete/clientes-gafete.component';
import { EmpresasTrenComponent } from './empresas-tren/empresas-tren.component';
import { CarruselProyectosComponent } from './carrusel-proyectos/carrusel-proyectos.component';
import { HeroInicioComponent } from './hero-inicio/hero-inicio.component';




@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, ClientesGafeteComponent, EmpresasTrenComponent, CarruselProyectosComponent, HeroInicioComponent],
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


export class InicioComponent implements OnInit,AfterViewInit {
  
  scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


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


}

ngOnInit(): void {
    // Si quieres retrasar la eliminación del preloader:
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('fade-out');
      }
    }, 2000); // 2 segundos, o el tiempo de tu animación
  }

}