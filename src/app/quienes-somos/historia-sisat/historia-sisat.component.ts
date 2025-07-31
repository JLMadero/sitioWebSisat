import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historia-sisat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historia-sisat.component.html',
  styleUrl: './historia-sisat.component.css'
})
export class HistoriaSisatComponent  {
  imagenes = [
    'assets/imgs/Linea1_recortada.png',
    'assets/imgs/Linea2_recortada.png',
    'assets/imgs/resized_Linea3-negro.jpg'
  ];

  imagenActual = 0;
  private startX = 0;
  private endX = 0;
  private dragging = false;

  getTransform() {
    return `translateX(-${this.imagenActual * 100}%)`;
  }

  siguiente() {
    this.imagenActual = (this.imagenActual + 1) % this.imagenes.length;
  }

  anterior() {
    this.imagenActual =
      (this.imagenActual - 1 + this.imagenes.length) % this.imagenes.length;
  }

  // TOUCH
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.endX = event.touches[0].clientX;
  }

  onTouchEnd() {
    this.handleSwipe();
  }

  // MOUSE
  onMouseDown(event: MouseEvent) {
    this.dragging = true;
    this.startX = event.clientX;
  }

  onMouseMove(event: MouseEvent) {
    if (this.dragging) {
      this.endX = event.clientX;
    }
  }

  onMouseUp() {
    if (this.dragging) {
      this.dragging = false;
      this.handleSwipe();
    }
  }

  onMouseLeave() {
    if (this.dragging) {
      this.dragging = false;
      this.handleSwipe();
    }
  }

  // Común
  private handleSwipe() {
    const threshold = 50; // píxeles para considerar swipe
    const delta = this.endX - this.startX;

    if (Math.abs(delta) > threshold) {
      if (delta < 0) {
        this.siguiente();
      } else {
        this.anterior();
      }
    }

    this.startX = 0;
    this.endX = 0;
  }
}

