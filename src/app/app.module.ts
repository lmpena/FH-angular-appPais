import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';

// Módulos
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { PaisModule } from './pais/pais.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
