import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empresas-tren',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empresas-tren.component.html',
  styleUrls: ['./empresas-tren.component.css']
})
export class EmpresasTrenComponent implements AfterViewInit {
  @ViewChild('contenedor', { static: true }) contenedor!: ElementRef;

  duracion = 20; // segundos por defecto

  empresas = [
    { logo: 'assets/imgs/cemex.jpeg', url: 'https://www.cemex.com/' },
    { logo: 'assets/imgs/gruma.png', url: 'https://www.gruma.com/' },
    { logo: 'assets/imgs/bachoco.png', url: 'https://bachoco.com' },
    { logo: 'assets/imgs/atlas.gif', url: 'https://www.atlascopco.com/' },
    { logo: 'assets/imgs/quality.png', url: 'https://www.qualitypost.com.mx/' },
    { logo: 'assets/imgs/mega.png', url: 'https://www.megacable.com.mx/' },
    { logo: 'assets/imgs/grainger.png', url: 'https://www.grainger.com.mx/' }
  ];

  abrirEnlace(event: MouseEvent, url: string) {
    event.stopPropagation();
    window.open(url, '_blank');
  }
  get empresasRepetidas() {
  return [...this.empresas, ...this.empresas];
}
  

  ngAfterViewInit() {
    
    // Estimar duración de animación: tiempo proporcional a ancho
    setTimeout(() => {
      const totalWidth = this.contenedor.nativeElement.scrollWidth;
      const velocidad = 100; // px por segundo
      this.duracion = totalWidth / velocidad;
    });
  }
}



