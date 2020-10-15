import { createStore, Store } from "redux";
import { incrementadorAction } from "./contador/contador.action";
import { contadorReducer } from "./contador/contador.reducer";


const store: Store = createStore( contadorReducer );

store.subscribe( () => {
    console.log('subs:', store.getState());
});

store.dispatch( incrementadorAction );