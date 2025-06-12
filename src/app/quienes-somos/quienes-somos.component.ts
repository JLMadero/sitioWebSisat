
import { CommonModule } from '@angular/common';
import { HeroQuienesComponent } from '../hero-quienes/hero-quienes.component';
import { ValoresSisatComponent } from '../valores-sisat/valores-sisat.component';
import { HistoriaSisatComponent } from '../historia-sisat/historia-sisat.component';
import { CarruselProyectosComponent } from '../carrusel-proyectos/carrusel-proyectos.component';
import { AliadosSisatComponent } from '../aliados-sisat/aliados-sisat.component';
import { AfterViewInit, Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';


@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [
    CommonModule,
    HeroQuienesComponent,
    HistoriaSisatComponent,
    ValoresSisatComponent,
    CarruselProyectosComponent,
    AliadosSisatComponent,
  ],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent implements AfterViewInit {
  isHistoriaVisible = false;
  isValoresVisible = false;
  isAliadosVisible = false;

  @ViewChild('historiaSection') historiaSection!: ElementRef;
  @ViewChild('valoresSection') valoresSection!: ElementRef;
  @ViewChild('aliadosSection') aliadosSection!: ElementRef;
  isCarruselVisible = false;
  @ViewChild('carruselSection') carruselSection!: ElementRef;


  ngAfterViewInit() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target as HTMLElement;

      const visible = entry.isIntersecting;

      if (el === this.historiaSection.nativeElement) this.isHistoriaVisible = visible;
      if (el === this.valoresSection.nativeElement) this.isValoresVisible = visible;
      if (el === this.carruselSection.nativeElement) this.isCarruselVisible = visible;
      if (el === this.aliadosSection.nativeElement) this.isAliadosVisible = visible;
    });
  }, options);

  observer.observe(this.historiaSection.nativeElement);
  observer.observe(this.valoresSection.nativeElement);
  observer.observe(this.carruselSection.nativeElement);
  observer.observe(this.aliadosSection.nativeElement);
}

}

