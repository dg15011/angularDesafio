import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    BarraLateralComponent,
    CuerpoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
