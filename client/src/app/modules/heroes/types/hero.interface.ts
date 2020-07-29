import { HeroImageInterface } from './heroImage.interface';


export interface HeroInterface {
  _id?: String,
  nickName : String,
  realName: String,
  originDescription: String,
  superPowers: String,
  catchPhrase: String,
  images: HeroImageInterface[]
}
