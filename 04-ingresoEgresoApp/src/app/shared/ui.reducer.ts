

import * as fromUI from './ui.accions';

export interface UiState {
    isLoading: boolean;
}

const initState: UiState = {
    isLoading: false
};

export function uiReducer( state = initState, action: fromUI.acciones ): UiState {

    switch ( action.type ) {

        case fromUI.ACTIVAR_LOADING:
            return {
                isLoading: true
            };

        case fromUI.DESACTIVAR_LOADING:
            return {
                isLoading: false
            };

        default:
            return state;
    }
}
