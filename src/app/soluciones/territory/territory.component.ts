import { Component } from '@angular/core';
import { HeroTerritoryComponent } from './hero-territory/hero-territory.component';
import { BeneficiosTerritoryComponent } from './beneficios-territory/beneficios-territory.component';
import { DiferenciadoresTerritoryComponent } from './diferenciadores-territory/diferenciadores-territory.component';
import { FuncionamientoTerritoryComponent } from './funcionamiento-territory/funcionamiento-territory.component';
import { TestimoniosTerritoryComponent } from './testimonios-territory/testimonios-territory.component';

@Component({
  selector: 'app-territory',
  standalone: true,
  imports: [HeroTerritoryComponent, BeneficiosTerritoryComponent, DiferenciadoresTerritoryComponent, FuncionamientoTerritoryComponent, TestimoniosTerritoryComponent],
  templateUrl: './territory.component.html',
  styleUrl: './territory.component.css'
})
export class TerritoryComponent {

}
