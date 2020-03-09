import { IPrismicRawData } from '../../src/intf/prismic/IPrismicRawData'
import { IPrismicParsedData } from '../../src/intf/prismic/IPrismicParsedData'
import { Languages } from '../../src/props/Languages'

export namespace PrismicFactory {

   export function rawPrismicResponse(): IPrismicRawData {
      return {
         page: 1,
         results_per_page: 100,
         results_size: 3,
         total_results_size: 3,
         total_pages: 1,
         next_page: null,
         prev_page: null,
         results: [
            {
               id: 'Xab6jxIAACEArHws',
               uid: 'page1',
               type: 'static-layout1',
               href: 'http://example.url.com',
               tags: [],
               first_publication_date: '2019-10-16T11:10:10+0000',
               last_publication_date: '2019-10-16T11:10:10+0000',
               slugs: [ 'page1' ],
               linked_documents: [],
               lang: 'en-gb',
               alternate_languages: [],
               data: {
                  title: 'page1'
               }
            },
            {
               id: 'Xab7BhIAACEArH47',
               uid: 'page2',
               type: 'static-layout1',
               href: 'http://another.example.url.com',
               tags: [],
               first_publication_date: '2019-10-16T11:12:08+0000',
               last_publication_date: '2019-10-16T11:12:08+0000',
               slugs: ['page-2'],
               linked_documents: [],
               lang: 'en-gb',
               alternate_languages: [],
               data: {
                  title: 'page 2'
               }
            },
            {
               id: 'Xab6oRIAACAArHx_',
               uid: 'homepage1',
               type: 'homepage',
               href: 'http://funny.example.url.com',
               tags: [],
               first_publication_date: '2019-10-16T11:10:28+0000',
               last_publication_date: '2019-10-16T11:10:28+0000',
               slugs: ['homepage'],
               linked_documents: [],
               lang: 'en-gb',
               alternate_languages: [],
               data: {
                  title: 'homepage'
               }
            },
            {
               id: 'XamhnRIAACEAuCwe',
               uid: 'page1',
               type: 'podcast-list',
               href: 'http://superb.example.url.com',
               tags: [],
               first_publication_date: '2019-10-18T11:27:28+0000',
               last_publication_date: '2019-10-18T11:27:28+0000',
               slugs: ['random'],
               linked_documents: [],
               lang: 'en-gb',
               alternate_languages: [],
               data: {
                  list: [
                     {
                        item: 'random',
                        url: 'www.random.com',
                        date: '2019-10-16'
                     }
                  ]
               }
            }
         ],
         version: 'fbcb9e0',
         license: 'All Rights Reserved'
      }
   }

   export function parsedPrismicData(): IPrismicParsedData[] {
      return [
        {
          id: 'Xab6jxIAACEArHws',
          uid: 'page1',
          type: 'static-layout1',
          lang: Languages.gb,
          data: {
            title: 'page1'
          }
        },
        {
          id: 'Xab7BhIAACEArH47',
          uid: 'page2',
          type: 'static-layout1',
          lang: Languages.gb,
          data: {
              title: 'page 2'
          }
        },
        {
          id: 'Xab6oRIAACAArHx_',
          uid: 'homepage1',
          type: 'homepage',
          lang: Languages.gb,
          data: {
              title: 'homepage'
          }
        },
        {
          id: 'XamhnRIAACEAuCwe',
          uid: 'page1',
          type: 'podcast-list',
          lang: Languages.gb,
          data: {
            list: [
              {
                item: 'random',
                url: 'www.random.com',
                date: '2019-10-16'
              }
            ]
          }
        }
      ]
   }
}
