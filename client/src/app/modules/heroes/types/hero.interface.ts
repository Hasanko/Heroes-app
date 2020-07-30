import { HeroImageInterface } from './heroImage.interface';


export interface HeroInterface {
  _id?: string,
  nickName : string,
  realName: string,
  originDescription: string,
  superPowers: string,
  catchPhrase: string,
  images: HeroImageInterface[]
}
