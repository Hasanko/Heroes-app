import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HeroesService } from '../../services/heroes.service';
import {stringify, parseUrl} from 'query-string'
import { Observable } from 'rxjs';
import { HeroesResponseInterface } from '../../types/heroesResponse.interface';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private router: Router) { }

  heroes$: Observable<HeroesResponseInterface>
  baseUrl: string
  currentPage: number
  limit = environment.limit

  ngOnInit(): void {
    this.baseUrl = this.router.url.split('?')[0]

    this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params.page || '1')
        this.fetchHeroes()
      }
    )
  }

  fetchHeroes(): void {
    const offset = this.currentPage * this.limit - this.limit
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
    })
    const apiUrlWithParams = `?${stringifiedParams}`
    this.heroes$ = this.heroesService.getAll(apiUrlWithParams)
  }
}
