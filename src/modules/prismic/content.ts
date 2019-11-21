import { IPrismicParsedData } from '../../intf/prismic/IPrismicParsedData'

export default class PrismicContent {

  private data: IPrismicParsedData[]

  constructor(data: IPrismicParsedData[] | []) {
    this.data = data
  }

  public getContentRecord(contentType: string): IPrismicParsedData | undefined {
    return this.data.find((element: IPrismicParsedData) => element.type === contentType)
  }
}
