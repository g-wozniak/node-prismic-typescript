import { IPrismicParsedData } from './IPrismicParsedData'

export interface IModulePrismic {
  getData(): IPrismicParsedData[]
  getContent(uid: string): IPrismicParsedData[] | []
}


