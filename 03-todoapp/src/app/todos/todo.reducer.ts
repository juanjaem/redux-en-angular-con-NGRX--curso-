import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, borrarCompleados, crear, editar, toggle, toggleAll } from './todos.actions';


export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Regar tomates'),
  new Todo('Aliñar aceitunas')
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]), // Podriamos haber utilizado push, pero no queremos mutar el state

  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id) ), // El filter retorna un array nuevo

  on(toggleAll, (state, {completado}) => state.map(todo => {
    console.log('klasdf');
    return {...todo, completado};
  })),

  on(toggle, (state, {id}) => {

    return state.map(todo => { // Usamos el map porque devuelve un nuevo array, no una instancia
      if (todo.id === id) {
        // todo.completado = !todo.completado;    // No podemos hacer esto porque 'todo' es pasado por referencia
        // return todo;                           // y mutaríamos el estado
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });

  }),

  on(editar, (state, {id, texto}) => {

    return state.map(todo => { // Usamos el map porque devuelve un nuevo array, no una instancia
      if (todo.id === id) {
        // todo.completado = !todo.completado;    // No podemos hacer esto porque 'todo' es pasado por referencia
        // return todo;                           // y mutaríamos el estado
        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    });

  }),

  on(borrarCompleados, (state) => {
    return state.filter( todo => !todo.completado);
  })

);


export function todoReducer(state, action) {
  return _todoReducer(state, action);
}

