import { Component } from '@angular/core';
import { Producto, ProductoService } from 'src/app/Services/Productos/producto.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Root, TiendaService } from 'src/app/Services/Tienda/tienda.service';

@Component({
  selector: 'app-home-productos',
  templateUrl: './home-productos.component.html',
  styleUrls: ['./home-productos.component.css']
})
export class HomeProductosComponent {
  ListProducto!: Root;
  
  constructor(private tiendaService : TiendaService, private productoService : ProductoService, private router : Router){
  }
  
  page: number = 1;
  size: number = 10;
  numElement: number = 0;

  productoColoresSearch = new FormGroup({
    nombreproducto: new FormControl(),
  });

  get NombreProducto() {
    return this.productoColoresSearch.get('nombreproducto')!;
  }

  getAllProductosBySearch(){
    if (!this.productoColoresSearch.value.nombreproducto) {
      this.getProducto();
      return;
    }
    this.tiendaService.getAllProductosBySearch(this.productoColoresSearch.value.nombreproducto, this.page, this.size).subscribe(
      res => {
        this.ListProducto = <any>res;
        this.numElement = this.ListProducto.totalRecords;
        console.log(this.ListProducto);
        this.orderByNombreAscending();
      },
      err => {
        console.log(err)
      }
    );
  }

  ngOnInit(): void{
    this.getProducto();
  }

  getProducto(){
    this.tiendaService.getAllProductosColores(this.page, this.size).subscribe(
      res => {
        this.ListProducto = <any>res;
        this.numElement = this.ListProducto.totalRecords;
        console.log(this.ListProducto);
        this.orderByNombreAscending();
      },
      err => {
        console.log(err)
      }
    );
  }

  deleteProducto(id: number){
    this.productoService.removeProducto(id).subscribe(
      res => {
        this.getProducto();
      },
      err => {
        console.log(err)
      }
    );
  }

  editProducto(id: number){
    this.router.navigate(['/editProduct/'+ id]);
  }

  OnchangenOrderBy(newValue : any){
    if (newValue.target.value == 1) {
      this.orderByNombreAscending();
      return;
    }
    this.orderByNombreDescending();
  }

  orderByNombreAscending(){
    this.ListProducto.data.sort(function (a, b) {
      // A va primero que B
      if (a.nombreProducto < b.nombreProducto)
        return -1;
      // B va primero que A
      else if (a.nombreProducto > b.nombreProducto)
        return 1;
      // A y B son iguales
      else 
          return 0;
    });
  }

  orderByNombreDescending(){
    this.ListProducto.data.sort(function (a, b) {
      // A va primero que B
      if (a.nombreProducto > b.nombreProducto)
        return -1;
      // B va primero que A
      else if (a.nombreProducto < b.nombreProducto)
        return 1;
      // A y B son iguales
      else 
          return 0;
    });
  }
}
