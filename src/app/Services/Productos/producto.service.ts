import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  url='https://localhost:44329/api/Productos';
  urlProductosBySearch='https://localhost:44329/SearchByString?search=';
  
  constructor(private http: HttpClient) { }

  getAllProducto(){
    return this.http.get(this.url);
  }

  getProducto(id: string){
    return this.http.get(this.url +'/'+ id);
  }

  saveProducto(person: any){
    console.log(person);
    return this.http.post(this.url, person);
  }

  editProducto(id: string, person: any){
    return this.http.put(this.url +'/'+ id, person);
  }

  removeProducto(id: number){
    return this.http.delete(this.url +'/'+ id);
  }

  getAllProductosBySearch(search: string){
    return this.http.get(this.urlProductosBySearch + search);
  }
}

export interface Producto{
  id : string,
  nombreProducto : string,
}

export interface Colores{
  id : string,
  color : string,
  nombreColor: string
}
