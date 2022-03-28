export class ChequesModel {

    public id: number | null;
    public cuentas_id: number | null;
    public serie: number | null;
    public numero: number | null;
    public doc_tipo: string | null;
    public doc_numero: string | null;
    public titular: string | null;
    public concepto: string | null;
    public monto: number | null;
    public emision: Date | null;
    public planillas_id: number | null;
    public planillas_anulada: Date | null;
    public confirmado: Date | null;
    public anulado: Date | null;
    public motivo: string | null;
    public borrado: any | null;
    public creado: Date | null;
    public modificado: Date | null;
    public id_cuentas: number | null;
    public banco: string | null;
    public sucursal: string | null;
    public cuenta: string | null;
    public borrado_cuentas: Date | null;
    public creado_cuentas: Date | null;
    public modificado_cuentas: Date | null;

    constructor(
        id: number | null,
        cuentas_id: number | null,
        serie: number | null,
        numero: number | null,
        doc_tipo: string | null,
        doc_numero: string | null,
        titular: string | null,
        concepto: string | null,
        monto: number | null,
        emision: Date | null,
        planillas_id: number | null,
        planillas_anulada: Date | null,
        confirmado: Date | null,
        anulado: Date | null,
        motivo: string | null,
        borrado: any | null,
        creado: Date | null,
        modificado: Date | null,
        id_cuentas: number | null,
        banco: string | null,
        sucursal: string | null,
        cuenta: string | null,
        borrado_cuentas: Date | null,
        creado_cuentas: Date | null,
        modificado_cuentas: Date | null,
    ) {
        this.id = id;
        this.cuentas_id = cuentas_id;
        this.serie = serie;
        this.numero = numero;
        this.doc_tipo = doc_tipo;
        this.doc_numero = doc_numero;
        this.titular = titular;
        this.concepto = concepto;
        this.monto = monto;
        this.emision = emision;
        this.planillas_id = planillas_id;
        this.planillas_anulada = planillas_anulada;
        this.confirmado = confirmado;
        this.anulado = anulado;
        this.motivo = motivo;
        this.borrado = borrado;
        this.creado = creado;
        this.modificado = modificado;
        this.id_cuentas = id_cuentas;
        this.banco = banco;
        this.sucursal = sucursal;
        this.cuenta = cuenta;
        this.borrado_cuentas = borrado;
        this.creado_cuentas = creado;
        this.modificado_cuentas = modificado;
    }

}
