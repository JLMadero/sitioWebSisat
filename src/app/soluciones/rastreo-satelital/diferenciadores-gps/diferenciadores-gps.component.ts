import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diferenciadores-gps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diferenciadores-gps.component.html',
  styleUrl: './diferenciadores-gps.component.css'
})
export class DiferenciadoresGpsComponent implements AfterViewInit, OnDestroy{
 diferenciadores = [
    { icon: '📡', titulo: 'Cobertura Nacional', descripcion: 'Tu flota monitoreada en todo México.' },
    { icon: '🛠️', titulo: 'Soporte Especializado', descripcion: 'Atención técnica y capacitación continua.' },
    { icon: '🔗', titulo: 'Integración con Plataformas', descripcion: 'Compatible con múltiples sistemas de gestión.' },
    { icon: '🔔', titulo: 'Alertas Personalizables', descripcion: 'Configura notificaciones según tus necesidades.' },
    { icon: '📦', titulo: 'Compatibilidad con distintos equipos', descripcion: 'Funciona con diferentes tipos de dispositivos GPS.' }
  ];

  @ViewChildren('diferenciador') diferenciadorElements!: QueryList<ElementRef>;
  intervalId: any;
  cycle = 0;

  ngAfterViewInit() {
    this.startAnimationCycle();
  }

  startAnimationCycle() {
    const elements = this.diferenciadorElements.toArray();

    const runCycle = async () => {
      while (true) {
        // Vuelta 1
        await this.runFirstCycle(elements);
        await this.sleep(5000);

        // Vuelta 2
        await this.runSecondCycle(elements);
        await this.sleep(5000);

        // Vuelta 3
        await this.runThirdCycle(elements);
        await this.sleep(5000);
      }
    };

    runCycle();
  }

  async runFirstCycle(elements: ElementRef[]) {
    const colors = ['rojo', 'negro', 'rojo', 'negro', 'rojo'];
    for (let i = 0; i < elements.length; i++) {
      this.clearClasses(elements);
      elements[i].nativeElement.classList.add(colors[i]);
      await this.sleep(1500);
    }
    this.clearClasses(elements);
  }

  async runSecondCycle(elements: ElementRef[]) {
    const colors = ['negro', 'rojo', 'negro', 'rojo', 'negro'];
    for (let i = 0; i < elements.length; i++) {
      this.clearClasses(elements);
      elements[i].nativeElement.classList.add(colors[i]);
      await this.sleep(1500);
    }
    this.clearClasses(elements);
  }

  async runThirdCycle(elements: ElementRef[]) {
    // Rojo uno por uno
    for (let i = 0; i < elements.length; i++) {
      elements[i].nativeElement.classList.add('rojo');
      await this.sleep(800);
    }
    // Negro en orden inverso
    for (let i = elements.length - 1; i >= 0; i--) {
      elements[i].nativeElement.classList.remove('rojo');
      elements[i].nativeElement.classList.add('negro');
      await this.sleep(800);
    }
    this.clearClasses(elements);
  }

  clearClasses(elements: ElementRef[]) {
    elements.forEach(el => el.nativeElement.classList.remove('rojo', 'negro'));
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
