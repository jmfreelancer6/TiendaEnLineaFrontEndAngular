import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  url='https://localhost:44329/api/ProductosColores';
  urlColores='https://localhost:44329/api/Colores';
  urlProductosByColores='https://localhost:44329/api/Productos';
  urlProductosBySearch='https://localhost:44329/SearchByString?';
  urlProductosByPagination='https://localhost:44329/GetPagination?';
  
  constructor(private http: HttpClient) { }

  getAllProductoColores(){
    return this.http.get(this.url);
  }

  getProducto(id: string){
    return this.http.get(this.url +'/'+ id);
  }

  getAllColores(){
    return this.http.get(this.urlColores);
  }

  getAllProductosColores(currentPage: number, pageSize : number){
    return this.http.get(this.urlProductosByPagination + "currentPage=" + currentPage +"&pageSize=" + pageSize +"");
  }

  getAllProductosBySearch(search: string, currentPage: number, pageSize : number){
    return this.http.get(this.urlProductosBySearch + "search="+search+"&currentPage="+currentPage+"&pageSize="+pageSize+"");
  }

  saveProductoColores(person: any){
    return this.http.post(this.url, person);
  }

  editProductoColores(id: string, person: any){
    return this.http.put(this.url +'/'+ id, person);
  }

  removeProductoColores(id: string){
    return this.http.delete(this.url +'/'+ id);
  }

}

export interface ProductoColores{
  id : string,
  idColor : string,
  idProducto : string,
  precio : string,
}

export interface Root {
  currentPage: number
  pageSize: number
  totalRecords: number
  data: Data[]
}

export interface Data {
  id: number
  nombreProducto: string
  productosColores: ProductosColore[]
}

export interface ProductosColore {
  id: number
  idColor: number
  colores: Colores
  idProducto: number
  precio: number
}

export interface Colores {
  id: number
  color: string
  nombreColor: string
}

