import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ClientesGafeteComponent } from './clientes-gafete/clientes-gafete.component';
import { EmpresasTrenComponent } from './empresas-tren/empresas-tren.component';
import { CarruselProyectosComponent } from './carrusel-proyectos/carrusel-proyectos.component';




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

 



}}

