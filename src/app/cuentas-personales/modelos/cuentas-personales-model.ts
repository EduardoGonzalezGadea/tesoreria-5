export class CuentasPersonalesModel {

    public id: number | null;
    public nombres: string | null;
    public apellidos: string | null;
    public cedula: string | null;
    public financiera: string | null;
    public cuenta_anterior: string | null;
    public cuenta_actual: string | null;
    public observaciones: string | null;
    public borrado: Date | null;
    public creado: Date | null;
    public modificado: Date | null;

    constructor(
        id: number | null,
        nombres: string | null,
        apellidos: string | null,
        cedula: string | null,
        financiera: string | null,
        cuenta_anterior: string | null,
        cuenta_actual: string | null,
        observaciones: string | null,
        borrado: Date | null,
        creado: Date | null,
        modificado: Date | null,
    ) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.financiera = financiera;
        this.cuenta_anterior = cuenta_anterior;
        this.cuenta_actual = cuenta_actual;
        this.observaciones = observaciones;
        this.borrado = borrado;
        this.creado = creado;
        this.modificado = modificado;
    }

}
