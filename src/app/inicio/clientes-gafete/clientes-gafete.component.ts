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
    testimonio: 'Sabemos dónde están nuestros equipos, nuestros clientes tienen más seguridad y confianza en nuestra empresa. Con Jigsaw llevamos el control del diésel consumido e inventarios, tenemos un ahorro entre el 6 y 7 porciento del consumo de combustible.',
    foto: 'assets/imgs/ALVARO.jpg',
    logo: 'assets/imgs/cayennelogo.png',
    volteado: false
  },
  {
    nombre: 'Sergio Ortiz Urias',
    cargo: 'Supervisor de C2 Yoreme',
    testimonio: 'Para Yoreme ha sido satisfactorio que con el rastreo satelital de SISAT nos permitió tener visibilidad de nuestras entregas en tiempo real, revisamos el estatus de viaje y así podemos saber cuándo es entregado el producto a nuestros clientes.',
    foto: 'assets/imgs/sergio.jpg', // asegúrate que la imagen corresponda
    logo: 'assets/imgs/yoreme.jpg',
    volteado: false
  },
  {
    nombre: 'Ulises Berrocal',
    cargo: 'Encargado de programación y logística, Prenosa',
    testimonio: 'Gracias a su sistema tan robusto bajamos nuestros consumos en combustible a un 30%. La tranquilidad de que nuestros equipos estén resguardados y la asesoría 24/7 de SISAT hacen la diferencia.',
    foto: 'assets/imgs/ulises.jpg',
    logo: 'assets/imgs/prenosa.png',
    volteado: false
  },
  {
    nombre: 'Salvador Álvarez Soldaña',
    cargo: 'Gerencia corporativa de transporte, Bachoco',
    testimonio: 'La instalación y puesta en marcha de los GPS ha contribuido de manera importante para abatir los robos de unidades. También nos ha ayudado a controlar la movilidad en ciertas zonas o en horarios de trabajo.',
    foto: 'assets/imgs/salvador.jpg',
    logo: 'assets/imgs/bachoco.png',
    volteado: false
  },
  {
  nombre: 'Víctor Francisco García Villa',
  cargo: 'Jefe de Auditoría Agromotriz',
  testimonio: 'Es una aplicación que a nosotros nos sirve bastante para estar monitoreando constantemente nuestras flotas de trabajo, podemos ver qué hicieron en tiempo pasado y dónde se encuentran en tiempo real. Nos brinda más de lo que necesitamos, sus operadores son muy atentos.',
  foto: 'assets/imgs/victor.jpg', // reemplaza con el nombre real del archivo
  logo: 'assets/imgs/agromotriz.jpeg',       // si tienes un logo de la empresa
  volteado: false
}

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

