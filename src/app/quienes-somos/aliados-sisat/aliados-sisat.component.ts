import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aliados-sisat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aliados-sisat.component.html',
  styleUrl: './aliados-sisat.component.css'
})
export class AliadosSisatComponent {
  aliados = [
    { img: 'assets/imgs/google.jpg', link: 'https://about.google' },
    { img: 'assets/imgs/microsoft.jpg', link: 'https://www.microsoft.com/es-mx/' },
    { img: 'assets/imgs/jigsawNosotros.png', link: 'https://fuel.jigsawm2m.com/Public/Login.aspx?ReturnUrl=%2f' },
    { img: 'assets/imgs/caiAmp.jpg', link: 'https://www.calamp.com' }
  ];
}

