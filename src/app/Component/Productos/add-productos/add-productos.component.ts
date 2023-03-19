import { Component } from '@angular/core';
import { Producto, ProductoService } from 'src/app/Services/Productos/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent {
  producto = new FormGroup({
    nombreproducto: new FormControl('', [Validators.required, Validators.maxLength(100)]),
  });

  get nombreproducto() {
    return this.producto.get('mombreproducto')!;
  }

  constructor(private productoService : ProductoService, private router : Router) { }

  add() {
    if (!this.producto.valid) {
      return;
    }
    console.log(this.producto.value);
    this.productoService.saveProducto(this.producto.value).subscribe();
    this.router.navigate(['/homeProduct']);
  }
}
