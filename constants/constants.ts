// Paths
export const SEARCH_PATH = '/'
export const VIRKOPEDIA_PATH = '/virkopedia'
export const MYACCOUNT_PATH = '/myaccount'
export const REGISTER_PATH = '/register'
export const GATED_CONTENT_PATH = '/gatedcontent'

// Endpoints
export const BASE_URL = 'http://localhost:9000'
export const COMPANIES_ENDPOINT = `${BASE_URL}/companies/`
export const VIRKOPEDIA_ENDPOINT = `${BASE_URL}/virkopedias/`

export const navigationData = [
  { path: SEARCH_PATH, text: 'Search' },
  { path: VIRKOPEDIA_PATH, text: 'Virkopedia' },
  { path: MYACCOUNT_PATH, text: 'My Account' },
]
