import authMiddleware from '~auth/core/middleware'
import Middleware from './middleware'
import Auth from '~auth/core/auth'
import ExpiredAuthSessionError from '~auth/inc/expired-auth-session-error'

// Active schemes
import scheme_5f2432aa from '~auth/schemes/local'
import scheme_41b0a53b from '~auth/schemes/oauth2'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/login","logout":false,"home":false,"callback":false},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/","secure":false},"name":"token"},"localStorage":{"prefix":"auth."},"defaultStrategy":"customer"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // customer
  $auth.registerStrategy('customer', new scheme_5f2432aa($auth, {"token":{"property":"data.token","required":true,"type":"Bearer"},"user":{"property":"data","autoFetch":true},"endpoints":{"login":{"url":"/backend/api/customer/auth/login","method":"post"},"logout":{"url":"/backend/api/customer/auth/logout","method":"get"},"user":{"url":"/backend/api/customer/auth/user","method":"get"}},"name":"customer"}))

  // admin
  $auth.registerStrategy('admin', new scheme_5f2432aa($auth, {"token":{"property":"data.token","required":true,"type":"Bearer"},"user":{"property":"data","autoFetch":true},"endpoints":{"login":{"url":"/backend/api/admin/auth/login","method":"post"},"logout":{"url":"/backend/api/admin/auth/logout","method":"get"},"user":{"url":"/backend/api/admin/auth/user","method":"get"}},"name":"admin"}))

  // vendor
  $auth.registerStrategy('vendor', new scheme_5f2432aa($auth, {"token":{"property":"data.token","required":true,"type":"Bearer"},"user":{"property":"data","autoFetch":true},"endpoints":{"login":{"url":"/backend/api/vendor/auth/login","method":"post"},"logout":{"url":"/backend/api/vendor/auth/logout","method":"get"},"user":{"url":"/backend/api/vendor/auth/user","method":"get"}},"name":"vendor"}))

  // facebook
  $auth.registerStrategy('facebook', new scheme_41b0a53b($auth, {"clientId":"689415782302093","redirectUri":"http://localhost:8000verify_login","name":"facebook","endpoints":{"authorization":"https://facebook.com/v2.12/dialog/oauth","userInfo":"https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email"},"scope":["public_profile","email"]}))

  // google
  $auth.registerStrategy('google', new scheme_41b0a53b($auth, {"clientId":"379327884031-bra3sptavca10h15jkn21mb8lln9smft.apps.googleusercontent.com","codeChallengeMethod":"","redirectUri":"http://localhost:8000verify_login","name":"google","endpoints":{"authorization":"https://accounts.google.com/o/oauth2/auth","userInfo":"https://www.googleapis.com/oauth2/v3/userinfo"},"scope":["openid","profile","email"]}))

  // customerSocialLogin
  $auth.registerStrategy('customerSocialLogin', new scheme_5f2432aa($auth, {"token":{"property":"data.token","required":true,"type":"Bearer"},"user":{"property":"data","autoFetch":true},"endpoints":{"login":{"url":"/backend/api/customer/auth/socialLogin","method":"post"},"logout":{"url":"/backend/api/customer/auth/logout","method":"get"},"user":{"url":"/backend/api/customer/auth/user","method":"get"}},"name":"customerSocialLogin"}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
