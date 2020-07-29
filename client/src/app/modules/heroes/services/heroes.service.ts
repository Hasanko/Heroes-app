import { HeroInterface } from './../types/hero.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'

@Injectable()
export class HeroesService{

  url: String = environment.apiUrl

  constructor(private http: HttpClient) {}

  getAll() : Observable<HeroInterface[]>{
    return this.http.get<HeroInterface[]>(`${this.url}/heroes`)
  }

  getById(id: String): Observable<HeroInterface>{
    return this.http.get<HeroInterface>(`${this.url}/heroes/${id}`)
  }

  create(hero: HeroInterface): Observable<HeroInterface> {
    return this.http.post<HeroInterface>(`${this.url}/heroes`, hero)
  }

  update(id: String, hero: HeroInterface): Observable<HeroInterface>{
    return this.http.patch<HeroInterface>(`${this.url}/heroes/${id}`, hero)
  }
}
