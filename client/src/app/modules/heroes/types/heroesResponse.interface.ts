import { HeroInterface } from './hero.interface';

export interface HeroesResponseInterface {
  heroes: HeroInterface[],
  count: number
}
