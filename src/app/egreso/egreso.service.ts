import { Egreso } from "./egreso.model";

export class EgresoService{
    egresos: Egreso[]= [
        new Egreso("Renta", 900),
        new Egreso("Ropa", 200)
    ];

    eliminarEgreso(egreso: Egreso): void{
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}