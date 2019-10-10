import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URI } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  private ObtenerCabeceras(): HttpHeaders{
    const token = '';
    return new HttpHeaders({'Content-Type': 'application/json', Authorization: `Bearer ${token}`});
  }
  async ObtenerUsuarioFiltro (Nombre: any, Usuario: any, Pagina: number, RegistroPorPagina: number){
    const url = `${API_URI}/Usuario/ConsultaUsuario/${Nombre}/${Usuario}/${Pagina}/${RegistroPorPagina}`;
    const headers = this.ObtenerCabeceras();
    return await this.http
      .get(url, {headers})
      .toPromise()
      .then((rest: any) => !('error' in rest) ? Promise.resolve(rest) : Promise.reject(rest.error))
      .catch();
  }
}
