import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';



export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo de Capitán América'),
];
 
const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo( texto )]), 
  on(actions.toggleCompletado, (state, {id}) => {
    return state.map( todo => {
      
      if( todo.id === id){
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    } )

  } )
);
 
export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}