import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProductInterface } from '../../../interfaces/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
  ) {
    this.headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8HttpClient');
  }

  newProduct(product: ProductInterface): Observable<any> {
    return this.http.post(environment.API_BASE + '', product, {headers: this.headers});
  }

  readProduct(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(environment.API_BASE + '', { headers: this.headers});
  }

  updateProduct(product: ProductInterface): Observable<any> {
    return this.http.put<any>(environment.API_BASE + '', product, {headers: this.headers});
  }

  deleteProduct(product: ProductInterface): Observable<any> {
    return this.http.delete(environment.API_BASE + '' + product.id, {headers: this.headers});
  }

  assignVehicleProduct(product: ProductInterface): Observable<any> {
    return this.http.post<any>(environment.API_BASE + '', product, {headers: this.headers});
  }

  unAssignVehicleProduct(product: ProductInterface): Observable<any> {
    return this.http.put<any>(environment.API_BASE + '', product, {headers: this.headers});
  }

  updateStockProduct(product: ProductInterface): Observable<any> {
    return this.http.put<any>(environment.API_BASE + '', product, {headers: this.headers});
  }
}