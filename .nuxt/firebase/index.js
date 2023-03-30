import createApp from './app.js'

import messagingService from './service.messaging.js'

const appConfig = {"apiKey":"AIzaSyDbtefXCERsgSJTn1Lm403PmfdQVw163Us","authDomain":"nictus-multivendor.firebaseapp.com","projectId":"nictus-multivendor","storageBucket":"nictus-multivendor.appspot.com","messagingSenderId":"880697357247","appId":"1:880697357247:web:da59f900a25152202b670a","measurementId":"G-WMD05ZMCMG"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.client) {
    servicePromises = [
      messagingService(session, firebase, ctx, inject),

    ]
  }

  const [
    messaging
  ] = await Promise.all(servicePromises)

  const fire = {
    messaging: messaging
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}