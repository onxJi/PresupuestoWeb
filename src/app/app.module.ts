import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule
  ],
  providers: [
    IngresoService,
    EgresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
