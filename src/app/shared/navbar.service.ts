import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private openSolucionesDropdownSubject = new Subject<void>();
  openSolucionesDropdown$ = this.openSolucionesDropdownSubject.asObservable();

  openSolucionesDropdown() {
    this.openSolucionesDropdownSubject.next();
  }
}



