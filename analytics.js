/* eslint-disable no-console */
import ReactGA from 'react-ga'
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const trackingNo=publicRuntimeConfig.ANALYTICS_TRACKING_NO;

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize(trackingNo)
}
export const logPageView = () => {
  if (typeof window !== "undefined") {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  }
}
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}