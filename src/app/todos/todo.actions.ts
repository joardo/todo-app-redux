import { createAction, props } from '@ngrx/store';


export const crear = createAction(
    '[TODO] Crear Todo',
    props<{ texto: string}>()
  );

export const toggleCompletado = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number}>()
  );

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number}>()
  );

export const editar = createAction(
    '[TODO] Edutar Todo',
    props<{ id: number, texto: string }>()
  );