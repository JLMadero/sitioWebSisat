import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-inicio',
  imports: [],
  templateUrl: './hero-inicio.component.html',
  styleUrl: './hero-inicio.component.css'
})
export class HeroInicioComponent {
 scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
