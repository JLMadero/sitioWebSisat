import { Component } from '@angular/core';
import { HeroGpsComponent } from './hero-gps/hero-gps.component';
import { BeneficiosGpsComponent } from './beneficios-gps/beneficios-gps.component';
import { DiferenciadoresGpsComponent } from './diferenciadores-gps/diferenciadores-gps.component';
import { EquiposGpsComponent } from './equipos-gps/equipos-gps.component';

@Component({
  selector: 'app-rastreo-satelital',
  imports: [HeroGpsComponent, BeneficiosGpsComponent, DiferenciadoresGpsComponent, EquiposGpsComponent],
  templateUrl: './rastreo-satelital.component.html',
  styleUrl: './rastreo-satelital.component.css'
})
export class RastreoSatelitalComponent {

}
