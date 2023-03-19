import { Component } from '@angular/core';
import { Colores, Producto, ProductoService } from 'src/app/Services/Productos/producto.service';
import { TiendaService } from 'src/app/Services/Tienda/tienda.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-producto-tienda',
  templateUrl: './add-producto-tienda.component.html',
  styleUrls: ['./add-producto-tienda.component.css']
})
export class AddProductoTiendaComponent {
  ListProducto!: Producto[];
  ListColores!: Colores[];
  constructor(private productoService : ProductoService, private tiendaService : TiendaService, private router : Router){
  }
  ngOnInit(): void{
    this.getProducto();
    this.getColores();
  }
  
  getProducto(){
    this.productoService.getAllProducto().subscribe(
      res => {
        this.ListProducto = <any>res;
        console.log(this.ListProducto);
      },
      err => {
        console.log(err)
      }
    );
  }

  getColores(){
    this.tiendaService.getAllColores().subscribe(
      res => {
        this.ListColores = <any>res;
        console.log(this.ListColores);
      },
      err => {
        console.log(err)
      }
    );
  }
  
  productoColores = new FormGroup({
    idcolor: new FormControl(),
    idproducto: new FormControl(),
    precio: new FormControl()
  });

  get IDColor() {
    return this.productoColores.get('idcolor')!;
  }

  get IDProducto() {
    return this.productoColores.get('idproducto')!;
  }

  get Precio() {
    return this.productoColores.get('precio')!;
  }


  add() {
    if (!this.productoColores.valid) {
      return;
    }
    console.log(this.productoColores.value);
    this.tiendaService.saveProductoColores(this.productoColores.value).subscribe();
    this.router.navigate(['']);
  }
}
