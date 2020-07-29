import { HeroInterface } from './../../types/hero.interface';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { of } from 'rxjs';
import { Materializecss } from 'src/app/shared/classes/materializecss';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  heroId: String = null;
  isNew: boolean = true
  form: FormGroup

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nickName: new FormControl(null, [Validators.required]),
      realName: new FormControl(null, [Validators.required]),
      originDescription: new FormControl(null),
      superPowers: new FormControl(null),
      catchPhrase: new FormControl(null)
    })

    this.route.params.pipe(
      switchMap((params: Params) => {
        if(params['id']) {
          this.isNew = false
          return this.heroesService.getById(params['id'])
        }
        return of(null)
      })
    ).subscribe((data: HeroInterface) => {
      if(data) {
        this.heroId = data._id
        this.form.patchValue({...data})
        Materializecss.updateInputs()
      }
    })
  }

  onSubmit(): void {
    if(this.isNew) {
      this.heroesService.create({...this.form.value}).subscribe(() => {
        this.router.navigate(['/'])
      })
    } else {
      this.heroesService.update(this.heroId, this.form.value).subscribe(() => {
        this.router.navigate(['/'])
      })
    }
  }

}
