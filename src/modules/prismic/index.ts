
import { getLanguageFromPrismic } from '../../props/Languages'
import { IModulePrismic } from '../../intf/prismic/IModulePrismic'
import { IPrismicRawData } from '../../intf/prismic/IPrismicRawData'
import { IPrismicParsedData } from '../../intf/prismic/IPrismicParsedData'

class Prismic implements IModulePrismic {

  private static parse(raw: IPrismicRawData): IPrismicParsedData[] {
    return (raw && raw.hasOwnProperty('results'))
      ? raw.results.map((data) => {
          return {
            id: data.id,
            uid: data.uid,
            type: data.type,
            lang: getLanguageFromPrismic(data.lang),
            data: data.data
          }
        })
      : []
  }

  private raw: IPrismicRawData

  private parsed: IPrismicParsedData[]

  public constructor(data: IPrismicRawData) {
    this.raw = data
    this.parsed = Prismic.parse(this.raw)
  }

  public getData(): IPrismicParsedData[] {
    return this.parsed
  }

  public getContent(uid: string): IPrismicParsedData[] | [] {
    return (this.parsed.filter((element: IPrismicParsedData) => element.uid === uid))
  }
}

export default Prismic
