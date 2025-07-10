import { Component } from '@angular/core';
import { NavbarService } from '../../shared/navbar.service'; // ✅ Asegúrate de tener la ruta correcta

@Component({
  selector: 'app-hero-quienes',
  standalone: true,
  imports: [],
  templateUrl: './hero-quienes.component.html',
  styleUrl: './hero-quienes.component.css'
})
export class HeroQuienesComponent {

  constructor(private navbarService: NavbarService) {}

  abrirDropdownSoluciones() {
    this.navbarService.openSolucionesDropdown();
  }
}


