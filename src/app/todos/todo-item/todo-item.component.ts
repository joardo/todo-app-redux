import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ]
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  //equivalente al queryparams
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  miFormulario = this.fb.group({
    chkControl: [null],
    txtInput: ['', Validators.required]
  });
  editando: boolean = false;



  constructor(private fb: FormBuilder, private store: Store<AppState>) {

  }

  ngOnInit(): void {


    this.miFormulario.controls.chkControl.setValue(this.todo.completado);
    this.miFormulario.controls.txtInput.setValue(this.todo.texto);

    this.miFormulario.controls.chkControl.valueChanges.subscribe(valor => {
      const id = this.todo.id;
      this.store.dispatch(actions.toggleCompletado({ id }))


    })
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);

  }

  terminarEdicion() {
    this.editando = false;

    if (this.miFormulario.invalid) return;
    if (this.miFormulario.controls.txtInput.value === this.todo.texto) return;

    this.store.dispatch(
      actions.editar({
        id: this.todo.id, 
        texto: this.miFormulario.controls.txtInput.value
      })
    );
  }

  borrar(){
    console.log('borrando', this.todo.id);  
    this.store.dispatch(actions.borrar({id: this.todo.id}))  
  }


}
