import { HeroInterface } from './../types/hero.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
import { HeroesResponseInterface } from '../types/heroesResponse.interface';

@Injectable()
export class HeroesService{

  url: string = environment.apiUrl

  constructor(private http: HttpClient) {}

  getAll(path: string) : Observable<HeroesResponseInterface>{
    const fullPath = this.url+'/heroes' + path
    console.log(fullPath)
    return this.http.get<HeroesResponseInterface>(`${fullPath}`)
  }

  getById(id: string): Observable<HeroInterface>{
    return this.http.get<HeroInterface>(`${this.url}/heroes/${id}`)
  }

  create(hero: HeroInterface): Observable<HeroInterface> {
    return this.http.post<HeroInterface>(`${this.url}/heroes`, hero)
  }

  update(id: string, hero: HeroInterface): Observable<HeroInterface>{
    return this.http.patch<HeroInterface>(`${this.url}/heroes/${id}`, hero)
  }

  remove(id: string): Observable<HeroInterface>{
    return this.http.delete<HeroInterface>(`${this.url}/heroes/${id}`)
  }
}
