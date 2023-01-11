import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string ="https://restcountries.com/v3.1"
  private fields: string= "?fields=name,capital,population,flags,altSpellings"
  constructor(private http: HttpClient) { }
  buscarPais(pais: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${pais}${this.fields}`
    return this.http.get<Pais[]>(url)
  }
  buscarCapital(capital: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/capital/${capital}${this.fields}`
    return this.http.get<Pais[]>(url)
  }
  buscarId(id: string): Observable<Pais>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Pais>(url)
  }
  buscarRegion(region: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/region/${region}${this.fields}`
    return this.http.get<Pais[]>(url)
  }
}
