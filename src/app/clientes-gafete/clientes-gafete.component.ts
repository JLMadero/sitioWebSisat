import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes-gafete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes-gafete.component.html',
  styleUrls: ['./clientes-gafete.component.css']
})
export class ClientesGafeteComponent {
  indice = 0;

  clientes = [
    {
      nombre: 'Álvaro Salazar Gil',
      cargo: 'Gerente de operaciones Cayenne Express',
      testimonio: 'Sabemos donde están nuestros equipos...',
      foto: 'assets/imgs/ALVARO.jpg',
      logo: 'assets/imgs/bachoco.png',
      volteado: false
    },
    {
      nombre: 'Sergio Ortiz Urias',
      cargo: 'Supervisor de C2 Yoreme',
      testimonio: 'Para Yoreme ha sido satisfactorio...',
      foto: 'assets/imgs/victor.jpg',
      logo: 'assets/imgs/gruma.png',
      volteado: false
    }
    // más clientes...
  ];

  get cliente() {
    return this.clientes[this.indice];
  }

  anterior() {
    this.indice = (this.indice - 1 + this.clientes.length) % this.clientes.length;
  }

  siguiente() {
    this.indice = (this.indice + 1) % this.clientes.length;
  }
}

