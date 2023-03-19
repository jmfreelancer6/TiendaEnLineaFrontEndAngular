import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductosComponent } from './Component/Productos/add-productos/add-productos.component';
import { EditProductosComponent } from './Component/Productos/edit-productos/edit-productos.component';
import { HomeProductosComponent } from './Component/Productos/home-productos/home-productos.component';
import { AddProductoTiendaComponent } from './Component/Tienda/add-producto-tienda/add-producto-tienda.component';
import { HomeTiendaComponent } from './Component/Tienda/home-tienda/home-tienda.component';

const routes: Routes = [
  {path: '', component: HomeTiendaComponent},
  {path: 'homeProduct', component: HomeProductosComponent},
  {path: 'addProduct', component: AddProductosComponent},
  {path: 'editProduct/:id', component: EditProductosComponent},
  {path: 'addProductTienda', component: AddProductoTiendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
