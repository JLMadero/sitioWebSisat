import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnologia-camaras-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tecnologia-camaras-component.component.html',
  styleUrl: './tecnologia-camaras-component.component.css',
})
export class TecnologiaCamarasComponentComponent {
   seleccionado = 0;

  tecnologia = [
    { icon: '📹', title: 'Streaming en tiempo real', desc: 'Observa lo que ocurre en tus unidades al instante sin interrupciones.' },
    { icon: '📍', title: 'Integración con GPS', desc: 'Combina video y localización para un control total de la operación.' },
    { icon: '☁️', title: 'Almacenamiento en la nube', desc: 'Accede a tus grabaciones desde cualquier parte del mundo.' },
    { icon: '📡', title: 'Conectividad 4G/5G', desc: 'Transmisión de datos estable y segura en todo momento.' },
    { icon: '⚙️', title: 'Compatibilidad SISAT', desc: 'Sincronización completa con tu ecosistema tecnológico.' }
  ];

  seleccionar(index: number) {
    this.seleccionado = index;
  }
}
