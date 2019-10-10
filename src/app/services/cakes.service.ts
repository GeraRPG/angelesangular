import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Cake } from "src/app/models/cakes";
import { Observable } from 'rxjs';
import { API_URI } from "src/app/app.constants";
@Injectable({
  providedIn: 'root'
})
export class CakesService {
  constructor(private http : HttpClient) { }
  private ObtenerCabecera(): HttpHeaders{
    const token = '';
    return new HttpHeaders({'Content-Type': 'application/json', Authorization: `Bearer ${token}`});
  }
  getCakes():Observable<Cake>{
    const url = `${API_URI}/cakes`;
    const headers = this.ObtenerCabecera();
    return this.http.get<Cake>(url, {headers});
  }
  getCake(id: string):Observable<Cake>{
    const url = `${API_URI}/cakes/${id}`;
    const headers = this.ObtenerCabecera();
    return this.http.get<Cake>(url, {headers});
  }
  deletedCake(id: string){
    const url = `${API_URI}/cakes/${id}`;
    const headers = this.ObtenerCabecera();
    return this.http.delete(url, {headers});
  }
  savedCake(cake: Cake){
    const url = `${API_URI}/cakes`;
    const headers = this.ObtenerCabecera();
    return this.http.post(url, cake, {headers});
  }
  updatedCake(id: string|number, cakeUpdate: Cake): Observable<Cake>{
    const url = `${API_URI}/cakes/${id}`;
    const headers = this.ObtenerCabecera();
    return this.http.put<Cake>(url, cakeUpdate, {headers});
  }
}
