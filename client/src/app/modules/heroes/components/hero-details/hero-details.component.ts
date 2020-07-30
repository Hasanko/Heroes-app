import { ActivatedRoute, Params } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { HeroInterface } from '../../types/hero.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  hero$: Observable<HeroInterface>

  constructor(private heroesService: HeroesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.hero$ = this.router.params.pipe(
      switchMap((params: Params) => {
        return this.heroesService.getById(params['id'])
      })
    )
  }

}
