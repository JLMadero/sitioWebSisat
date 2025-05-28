import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SolucionesComponent } from './soluciones/soluciones.component';
import { ServiciosComponent } from './servicios/servicios.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'soluciones', component: SolucionesComponent },
  { path: 'servicios', component: ServiciosComponent },

  // Subrutas de Soluciones (Trípticos)
  {
    path: 'soluciones/paroute',
    loadComponent: () => import('./soluciones/paroute/paroute.component').then(m => m.ParouteComponent)
  },
  {
    path: 'soluciones/gps',
    loadComponent: () => import('./soluciones/gps/gps.component').then(m => m.GpsComponent)
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
  }
];


  // Puedes agregar más rutas aquí si lo necesitas




