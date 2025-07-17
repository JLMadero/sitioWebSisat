import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-territory',
  imports: [],
  templateUrl: './hero-territory.component.html',
  styleUrl: './hero-territory.component.css'
})
export class HeroTerritoryComponent {
scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
