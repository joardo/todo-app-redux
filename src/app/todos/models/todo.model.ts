export class Todo {
    id: number;
    texto: string;
    completado: boolean;



constructor( texto: string){
    this.texto = texto;
    this.id = Math.round(Math.random() * 10000000);
    this.completado = false;


}

}