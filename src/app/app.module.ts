import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeProductosComponent } from './Component/Productos/home-productos/home-productos.component';
import { AddProductosComponent } from './Component/Productos/add-productos/add-productos.component';
import { HomeTiendaComponent } from './Component/Tienda/home-tienda/home-tienda.component';
import { AddProductoTiendaComponent } from './Component/Tienda/add-producto-tienda/add-producto-tienda.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProductosComponent } from './Component/Productos/edit-productos/edit-productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import '@angular/localize/init'

@NgModule({
  declarations: [
    AppComponent,
    HomeProductosComponent,
    AddProductosComponent,
    HomeTiendaComponent,
    AddProductoTiendaComponent,
    EditProductosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
