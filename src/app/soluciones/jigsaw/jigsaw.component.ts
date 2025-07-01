import { Component } from '@angular/core';
import { BeneficiosJigsawComponent } from './beneficios-jigsaw/beneficios-jigsaw.component';
import { CaracteristicasJigsawComponent } from './caracteristicas-jigsaw/caracteristicas-jigsaw.component';
import { CTAJigsawComponent } from './ctajigsaw/ctajigsaw.component';
import { HeroJigsawComponent } from './hero-jigsaw/hero-jigsaw.component';
import { QueEsJigsawComponent } from './que-es-jigsaw/que-es-jigsaw.component';

@Component({
  selector: 'app-jigsaw',
  imports: [BeneficiosJigsawComponent, CaracteristicasJigsawComponent, CTAJigsawComponent, HeroJigsawComponent, QueEsJigsawComponent],
  templateUrl: './jigsaw.component.html',
  styleUrl: './jigsaw.component.css'
})
export class JigsawComponent {

}
