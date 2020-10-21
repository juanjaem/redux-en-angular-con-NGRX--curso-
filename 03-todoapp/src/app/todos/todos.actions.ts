import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[todo] Crea Todo',
    props<{texto: string}>()
);

export const toggle = createAction(
    '[todo] Toggle Todo',
    props<{id: number}>()
);

export const toggleAll = createAction(
    '[todo] ToggleAll Todo',
    props<{completado: boolean}>()
);

export const editar = createAction(
    '[todo] Editar Todo',
    props<{id: number, texto: string}>()
);

export const borrar = createAction(
    '[todo] Borrar Todo',
    props<{id: number}>()
);

export const borrarCompleados = createAction('[todo] BorrarCompletados Todo');
