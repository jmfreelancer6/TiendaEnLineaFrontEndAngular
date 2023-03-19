import { Component } from '@angular/core';
import { Producto, ProductoService } from 'src/app/Services/Productos/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-productos',
  templateUrl: './edit-productos.component.html',
  styleUrls: ['./edit-productos.component.css']
})

export class EditProductosComponent {
  producto = new FormGroup({
    id: new FormControl(),
    nombreproducto: new FormControl('', [Validators.required, Validators.maxLength(100)]),
  });

  get nombreproducto() {
    return this.producto.get('mombreproducto')!;
  }

  constructor(private productoService : ProductoService, private router : Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    const id = <string>this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.productoService.getProducto(id).subscribe(
        res => {
          var dato = <Producto>res;
          console.log(dato);
          this.producto.setValue({ id: dato.id, nombreproducto: dato.nombreProducto});
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  edit() {
    if (!this.producto.valid) {
      return;
    }
    this.productoService.editProducto(this.producto.get("id")?.value, this.producto.value).subscribe();
    this.router.navigate(['/homeProduct']);
  }
}
