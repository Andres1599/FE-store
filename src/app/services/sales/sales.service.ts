import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SaleInterface } from '../../../interfaces/SaleInterface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProductInterface } from '../../../interfaces/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8HttpClient'
    );
  }

  newSale(sale: SaleInterface): Observable<any> {
    return this.http.post<any>(environment.API_BASE + '', sale, {
      headers: this.headers
    });
  }

  readSale(): Observable<SaleInterface[]> {
    return this.http.get<SaleInterface[]>(environment.API_BASE + '', {
      headers: this.headers
    });
  }

  updateSale(sale: SaleInterface): Observable<any> {
    return this.http.put(environment.API_BASE + '', sale, {
      headers: this.headers
    });
  }

  deleteSale(sale: SaleInterface): Observable<any> {
    return this.http.delete(environment.API_BASE + '' + sale.id, {
      headers: this.headers
    });
  }

  assignProductSale(
    sale: SaleInterface,
    product: ProductInterface
  ): Observable<any> {
    return this.http.post<any>(
      environment.API_BASE + '',
      { saleId: sale.id, product: product.id },
      { headers: this.headers }
    );
  }
}
