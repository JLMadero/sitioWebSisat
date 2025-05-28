import { Component } from '@angular/core';

@Component({
  selector: 'app-app',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: '../styleTriptico.css'
})
export class AppComponent {
  state = 0;

  nextStep() {
    this.state = (this.state + 1) % 4;
    const triptico = document.getElementById('triptico');
    if (!triptico) return;

    triptico.classList.add('zoom-out');
    triptico.classList.remove('zoom-in');

    setTimeout(() => {
      triptico.classList.remove('step-0', 'step-1', 'step-2', 'step-3');
      triptico.classList.add(`step-${this.state}`);
    }, 500);

    setTimeout(() => {
      triptico.classList.remove('zoom-out');
      triptico.classList.add('zoom-in');
    }, 1000);
  }
}
