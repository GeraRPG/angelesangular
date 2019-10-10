import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notes } from '../models/notes';
import { API_URI } from '../app.constants';

@Injectable({
  
  providedIn: 'root'
})
export class NotesService {

  constructor(private http : HttpClient) { }
  private ObtenerCabecera() : HttpHeaders {
    const token = ''
    return new HttpHeaders({'Content-Type': 'application/json', Authorization: `Bearer ${token}`});
  }
  getNotes():Observable<Notes> {
    const url = `${API_URI}/notes`;
    const headers = this.ObtenerCabecera();
    return this.http.get<Notes>(url, {headers});
  }
  getNote(id: string|number ):Observable<Notes> {
    const url = `${API_URI}/notes/${id}`;
    const headers = this.ObtenerCabecera();
    return this.http.get<Notes>(url, {headers});
  }
  savedNote(notes: Notes){
    const url = `${API_URI}/notes`;
    const headers = this.ObtenerCabecera();
    return this.http.post(url, notes, {headers});
  }
  updatedNote(id: string|number, cakeUpdate: Notes) {
    const url = `${API_URI}/notes/${id}`;
    const headers = this.ObtenerCabecera();
    return this.http.put(url, cakeUpdate, {headers});
  }
  deletedNote(id: string|number) {
    const url = `${API_URI}/notes/${id}`;
    const headers = this.ObtenerCabecera();
    return this.http.delete(url, {headers});
  }
}
