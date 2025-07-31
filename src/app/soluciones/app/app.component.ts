import { Component } from '@angular/core';
import { BeneficiosAppComponent } from './beneficios-app/beneficios-app.component';
import { CtaFinalAppComponent } from './cta-final-app/cta-final-app.component';
import { DiferenciadoresAppComponent } from './diferenciadores-app/diferenciadores-app.component';
import { HeroAppMovilComponent } from './hero-app-movil/hero-app-movil.component';
import { InfoTecnicaAppComponent } from './info-tecnica-app/info-tecnica-app.component';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [BeneficiosAppComponent, CtaFinalAppComponent, DiferenciadoresAppComponent, HeroAppMovilComponent, InfoTecnicaAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
