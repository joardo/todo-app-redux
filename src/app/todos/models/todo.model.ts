export class Todo {
    id: number;
    texto: string;
    completado: boolean;



constructor( texto: string){
    this.texto = texto;
    this.id = new Date().getTime();
    this.completado = false;


}

}