import { Injectable, effect } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollTopService {
  constructor(router: Router) {
    effect(() => {
      router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // ✅ scroll suave en cada navegación
      });
    });
  }
}

