import { expect } from 'chai'
import Prismic from '../../src/modules/prismic'
import PrismicContent from '../../src/modules/prismic/content'
import { PrismicFactory } from '../support/factories/prismic'
import { IPrismicParsedData } from '../../src/intf/prismic/IPrismicParsedData'

describe('Prismic', () => {
  it('returns parsed data', () => {
    const prismic = new Prismic(PrismicFactory.rawPrismicResponse())
    expect(prismic.getData()).to.eql(PrismicFactory.parsedPrismicData())
  })

  it('returns class instance if data are empty', () => {
    const prismic = new Prismic({
      results: []
    })
    expect(prismic.getData()).to.eql([])
  })

  it('returns a data record for particular `uid`', () => {
    const prismic = new Prismic(PrismicFactory.rawPrismicResponse())
    const content = PrismicFactory.parsedPrismicData().filter((element: IPrismicParsedData) => element.uid === 'page2')
    expect(prismic.getContent('page2')).to.eql(content)
  })

  it('returns `undefined` if uid is empty', () => {
    const prismic = new Prismic(PrismicFactory.rawPrismicResponse())
    expect(prismic.getContent('')).to.eql([])
  })

  it('returns `undefined` if uid does not exist', () => {
    const prismic = new Prismic(PrismicFactory.rawPrismicResponse())
    expect(prismic.getContent('somenonexistingkey')).to.eql([])
  })
})

describe('Prismic Content', () => {

  it('returns a content record for a specific content type', () => {
    const uid = 'page1'
    const contentType = 'podcast-list'
    const prismic = new Prismic(PrismicFactory.rawPrismicResponse())
    const data = prismic.getContent(uid)
    const content = new PrismicContent(data)
    const parsedItem = PrismicFactory.parsedPrismicData().filter((element: IPrismicParsedData) => element.uid === uid && element.type === contentType)
    expect(data).to.exist
    expect(data).to.have.length(2)
    expect(parsedItem).to.exist
    expect(content.getContentRecord(contentType)).to.deep.equal(parsedItem[0])
  })

})
