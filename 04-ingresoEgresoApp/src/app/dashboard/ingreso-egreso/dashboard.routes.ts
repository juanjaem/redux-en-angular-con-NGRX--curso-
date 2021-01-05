import { Routes } from '@angular/router';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { AniadirMovimientosComponent } from './aniadir-movimientos/aniadir-movimientos.component';
import { DetalleComponent } from './detalle/detalle.component';



export const dashboardRoutes: Routes = [

 { path: '', component: EstadisticaComponent },
 { path: 'aniadir-movimientos', component: AniadirMovimientosComponent },
 { path: 'detalle', component: DetalleComponent },

];
