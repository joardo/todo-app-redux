import { createReducer, on, Action } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions'; 
 
export const initialState: filtrosValidos = "todos";
 
const _filtroReducer = createReducer<filtrosValidos, Action>(
  initialState,
  on(setFiltro , (state, {filtro}) => filtro),
)
 
export function filtroRecucer(state:any, action:Action) {
  return _filtroReducer(state, action);
}