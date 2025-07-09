import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-historia-sisat',
  standalone: true,
  imports: [],
  templateUrl: './historia-sisat.component.html',
  styleUrl: './historia-sisat.component.css'
})
export class HistoriaSisatComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const paragraphs = document.querySelectorAll('.historia-texto p');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    paragraphs.forEach(p => observer.observe(p));
  }
}

