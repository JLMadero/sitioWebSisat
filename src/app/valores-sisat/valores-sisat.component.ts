import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valores-sisat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valores-sisat.component.html',
  styleUrl: './valores-sisat.component.css'
})
export class ValoresSisatComponent {
valores = [
  { icon: '🚀', titulo: 'Innovación', descripcion: 'Transformamos ideas complejas en soluciones ágiles y funcionales.' },
  { icon: '🤝', titulo: 'Confianza', descripcion: 'Crecemos con nuestros clientes construyendo relaciones a largo plazo.' },
  { icon: '💡', titulo: 'Impacto', descripcion: 'Nuestro software ayuda a ahorrar combustible, tiempo y recursos.' },
];
}
