import { Component } from '@angular/core';

@Component({
  selector: 'app-gps',
  imports: [],
  templateUrl: './gps.component.html',
  styleUrl: '../styleTriptico.css'
})
export class GpsComponent {
  state = 0;

  async nextStep() {
    const triptico = document.getElementById('triptico');
    if (!triptico) return;

    // Alejar
    triptico.classList.add('zoom-out');
    triptico.classList.remove('zoom-in');

    await this.delay(500);

    // Quitar clases anteriores
    triptico.classList.remove('step-0', 'step-1', 'step-2', 'step-3');

    if (this.state === 2) {
      // Cierre especial para el paso 3: cerrar primero derecha, luego izquierda
      triptico.classList.add('step-3');
      await this.delay(1000);
      triptico.classList.remove('step-3');
      triptico.classList.add('step-0');
      this.state = 0;
    } else {
      this.state++;
      triptico.classList.add(`step-${this.state}`);
    }

    await this.delay(500);

    // Acercar
    triptico.classList.remove('zoom-out');
    triptico.classList.add('zoom-in');
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
