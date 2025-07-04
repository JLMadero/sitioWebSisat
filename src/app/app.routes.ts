import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SolucionesComponent } from './soluciones/soluciones.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'soluciones', component: SolucionesComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent},

  // Subrutas de Soluciones (Trípticos)
  {
    path: 'soluciones/paroute',
    loadComponent: () => import('./soluciones/paroute/paroute.component').then(m => m.ParouteComponent)
  },
  {
    path: 'soluciones/camaras',
    loadComponent: () => import('./soluciones/camaras/camaras.component').then(m => m.CamarasComponent)
  },
  {
    path: 'soluciones/app',
    loadComponent: () => import('./soluciones/app/app.component').then(m => m.AppComponent)
  },
  {
    path: 'soluciones/jigsaw',
    loadComponent: () => import('./soluciones/jigsaw/jigsaw.component').then(m => m.JigsawComponent)
  },
  {
    path: 'soluciones/territory',
    loadComponent: () => import('./soluciones/territory/territory.component').then(m => m.TerritoryComponent)
  },
  {
    path: 'soluciones/rastreo-satelital',
    loadComponent: () => import('./soluciones/rastreo-satelital/rastreo-satelital.component').then(m => m.RastreoSatelitalComponent)
  }
];


  // Puedes agregar más rutas aquí si lo necesitas




