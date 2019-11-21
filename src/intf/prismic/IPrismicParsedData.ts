import { IKeyAny } from '../IKeyAny'
import Languages from '../../props/Languages'

export interface IPrismicParsedData {
  id: string
  uid: string
  type: string
  lang: Languages
  data: IKeyAny
}
