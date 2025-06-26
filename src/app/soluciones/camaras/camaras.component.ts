import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BeneficiosCamarasComponentComponent } from './beneficios-camaras-component/beneficios-camaras-component.component';
import { ContactoCamarasComponentComponent } from './contacto-camaras-component/contacto-camaras-component.component';
import { DiferenciadoresCamarasComponentComponent } from './diferenciadores-camaras-component/diferenciadores-camaras-component.component';
import { HeroCamarasComponentComponent } from './hero-camaras-component/hero-camaras-component.component';
import { TecnologiaCamarasComponentComponent } from './tecnologia-camaras-component/tecnologia-camaras-component.component';

@Component({
  selector: 'app-camaras',
  standalone: true,
  imports: [CommonModule, RouterModule, BeneficiosCamarasComponentComponent, ContactoCamarasComponentComponent, DiferenciadoresCamarasComponentComponent, HeroCamarasComponentComponent, TecnologiaCamarasComponentComponent],
  templateUrl: './camaras.component.html',
  styleUrl: './camaras.component.css'
})
export class CamarasComponent {

}
