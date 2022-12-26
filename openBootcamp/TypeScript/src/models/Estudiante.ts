import { resolveTxt } from 'dns'
import { resolve } from 'path'
import { Curso } from './curso'

export class Estudiante {

    //Propiedades de clase
    nombre: string
    apellidos?: string
    cursos: Curso[]

    private ID: string = '12341234'

    //Constructor - LAS PROPIEDADES OPCIONALES VAN AL FINAL
    constructor(nombre: string, cursos: Curso[], apellidos?: string){
        //Inicializamos propiedades
        this.nombre = nombre
        this.apellidos ? apellidos : undefined
        this.cursos = cursos
    }

    get horasEstudiadas():number{
        let horasEstudiadas = 0
        this.cursos.forEach(curso =>{
            horasEstudiadas += curso.horas
        })
        return horasEstudiadas
    }
    set ID_Estudiante(id: string){
        this.ID = id
    }
    get ver_ID_Estudiante():string{
        return this.ID
    }
}