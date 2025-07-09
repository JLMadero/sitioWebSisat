import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valores-sisat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valores-sisat.component.html',
  styleUrl: './valores-sisat.component.css'
})
export class ValoresSisatComponent implements AfterViewInit {
  valores = [
    { icon: '🚀', titulo: 'Innovación', descripcion: 'Transformamos ideas complejas en soluciones ágiles y funcionales.' },
    { icon: '🤝', titulo: 'Confianza', descripcion: 'Crecemos con nuestros clientes construyendo relaciones a largo plazo.' },
    { icon: '💡', titulo: 'Impacto', descripcion: 'Nuestro software ayuda a ahorrar combustible, tiempo y recursos.' },
  ];

  ngAfterViewInit(): void {
    const cards = document.querySelectorAll('.valor-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
  }
}

