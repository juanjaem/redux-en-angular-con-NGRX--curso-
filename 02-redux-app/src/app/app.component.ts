import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { AppState } from './app.reducers';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;

  constructor(private store: Store<AppState>) {
    // this.store.subscribe(state => this.contador = state.contador);
    this.store.select('contador').subscribe(contador => this.contador = contador); // Solo queremos escuchar los cambios de 'contador'
  }


  incrementar() {
    this.store.dispatch( actions.incrementar() );
  }

  decrementar() {
    this.store.dispatch( actions.decrementar() );
  }

}
