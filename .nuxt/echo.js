import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')

function getHeaders ({ app }) {
  const headers = {}

  return headers
}

export default (ctx, inject) => {
  const options = {"broadcaster":"pusher","plugins":null,"authModule":false,"connectOnLogin":true,"disconnectOnLogout":true,"key":"1bfaf0b064d35a7bac7d","cluster":"ap2","forceTLS":true,"disableStats":true,"encrypted":true}
  options.auth = options.auth || {}
  options.auth.headers = {
    ...options.auth.headers,
    ...getHeaders(ctx)
  }

  const echo = new Echo(options)

  ctx.$echo = echo
  inject('echo', echo)
}
