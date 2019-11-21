import { IPrismicRawResultsData } from './IPrismicRawResultsData'

export interface IPrismicRawData {
  results: IPrismicRawResultsData[]
  page?: number
  results_per_page?: number
  results_size?: number
  total_results_size?: number
  total_pages?: number
  next_page?: number | null
  prev_page?: number | null
  version?: string
  license?: string
}
