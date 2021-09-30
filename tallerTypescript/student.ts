export class Student {
    codigo: number;
    cedula: string;
    edad: number;
    direccion: string;
    telefono: number;
    
  
    constructor(codigo: number,
        cedula: string,
        edad: number,
        direccion: string,
        telefono: number) {
      this.codigo = codigo;
      this.cedula = cedula;
      this.edad = edad;
      this.direccion =direccion;
      this.telefono = telefono;
     
    }
  }