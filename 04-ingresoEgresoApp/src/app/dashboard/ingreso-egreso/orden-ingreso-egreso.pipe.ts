import { Pipe, PipeTransform } from '@angular/core';
import { IngresoEgreso } from './ingreso-egreso.model';

@Pipe({
  name: 'ordenIngresoEgreso'
})
export class OrdenIngresoEgresoPipe implements PipeTransform {

  transform( items: IngresoEgreso[] ): IngresoEgreso[] {

    return [...items].sort(  (a, b) => { // Clonamos el array antes de trabajarlo, si no dará error de que items es de solo lectura

      if ( a.tipo === 'ingreso' ) {
        return -1;
      } else {
        return 1;
      }

    });


  }

}
