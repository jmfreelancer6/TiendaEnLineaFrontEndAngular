import { Component } from '@angular/core';
import { Root, TiendaService } from 'src/app/Services/Tienda/tienda.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-tienda',
  templateUrl: './home-tienda.component.html',
  styleUrls: ['./home-tienda.component.css']
})
export class HomeTiendaComponent {
  ListProductoColores!: Root;

  constructor(private tiendaService : TiendaService, private router : Router){
  }

  page: number = 1;
  size: number = 10;
  numElement: number = 20;

  ngOnInit(): void{
    this.getProducto();
  }

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
        this.ListProductoColores = <any>res;
        this.numElement = this.ListProductoColores.totalRecords;
        console.log(this.ListProductoColores);
        this.orderByNombreAscending();
      },
      err => {
        console.log(err)
      }
    );
  }

  getProducto(){
    this.tiendaService.getAllProductosColores(this.page, this.size).subscribe(
      res => {
        this.ListProductoColores = <any>res;
        this.numElement = this.ListProductoColores.totalRecords;
        console.log(this.ListProductoColores);
        this.orderByNombreAscending();
      },
      err => {
        console.log(err)
      }
    );
  }

  OnchangenOrderBy(newValue : any){
    if (newValue.target.value == 1) {
      this.orderByNombreAscending();
      return;
    }
    this.orderByNombreDescending();
  }

  orderByNombreAscending(){
    this.ListProductoColores.data.sort(function (a, b) {
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
    this.ListProductoColores.data.sort(function (a, b) {
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
