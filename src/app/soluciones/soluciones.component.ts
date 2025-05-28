import { Component } from '@angular/core';

@Component({
  selector: 'app-soluciones',
  standalone: true,
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.css']
})
export class SolucionesComponent {
  state = 0;

  animateTo(stepClass: string) {
    const triptico = document.getElementById('triptico');
    if (!triptico) return;

    triptico.classList.add('zoom-out');
    triptico.classList.remove('zoom-in');

    setTimeout(() => {
      triptico.classList.remove('step-0', 'step-1', 'step-2', 'step-3');
      triptico.classList.add(stepClass);
    }, 500);

    setTimeout(() => {
      triptico.classList.remove('zoom-out');
      triptico.classList.add('zoom-in');
    }, 1000);
  }

  nextStep() {
    this.state = (this.state + 1) % 4;
    this.animateTo(`step-${this.state}`);
  }
}

