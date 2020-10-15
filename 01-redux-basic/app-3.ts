import { Action, Reducer } from "./ngrx-fake/ngrx";
import { contadorReducer } from './contador/contador.reducer'
import { incrementadorAction, multiplicarAction } from "./contador/contador.action";


class Store<T> {
    constructor(private reducer: Reducer<T>, private state: T) {}

    getState() {
        return this.state;
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}


const store = new Store( contadorReducer, 10 ); // Iniciar el STORE
console.log( store.getState() );


store.dispatch(incrementadorAction);
console.log( store.getState() );


store.dispatch(multiplicarAction);
console.log( store.getState() );

