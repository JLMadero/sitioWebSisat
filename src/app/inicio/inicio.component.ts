import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {
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
}

