import { Component } from '@angular/core';
import { HeroParouteComponent } from './hero-paroute/hero-paroute.component';
import { BeneficiosParouteComponent } from './beneficios-paroute/beneficios-paroute.component';
import { CtaParouteComponent } from './cta-paroute/cta-paroute.component';
import { FuncionamientoParouteComponent } from './funcionamiento-paroute/funcionamiento-paroute.component';
import { TestimoniosParouteComponent } from './testimonios-paroute/testimonios-paroute.component';
import { VideoParouteComponent } from './video-paroute/video-paroute.component';

@Component({
  selector: 'app-paroute',
  standalone: true,
  imports: [HeroParouteComponent, BeneficiosParouteComponent, CtaParouteComponent, FuncionamientoParouteComponent, TestimoniosParouteComponent, VideoParouteComponent],
  templateUrl: './paroute.component.html',
  styleUrl: './paroute.component.css'
})
export class ParouteComponent {

}
