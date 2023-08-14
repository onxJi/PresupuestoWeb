import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingreso:Ingreso[]= [];
  egreso: Egreso [] = [];

  constructor(private ingresoService:IngresoService,
              private egresoService:EgresoService){
    this.ingreso = ingresoService.ingresos;
    this.egreso = egresoService.egresos;

  }

  getIngresoAll(){
    let ingresoTotal: number = 0;
    this.ingreso.forEach(ingreso =>{
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }
  getEgresoAll(){
    let egresoTotal: number = 0;
    this.egreso.forEach(egreso =>{
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoAll()/this.getEgresoAll();
  }
  
  getPresupuestoTotal() { 
    return this.getIngresoAll() - this.getEgresoAll();
  }
}
