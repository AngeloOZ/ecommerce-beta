

export default async function (session, firebase) {
  // Can only be initiated on client side
  if (!process.client) {
    return
  }

  await import('firebase/compat/messaging')

  if (firebase.messaging.isSupported()) {
    const messagingService = session.messaging()

    messagingService.getToken({vapidKey: "BAO9nGDKZpFWPxSPPiFIGMHpB_m0wiV9Q-d-POSsBtEyHZGr1e4CjKTB4gbEahIlbbNxRpyWkO86u7YFEVe58FE"})

    return messagingService
  }
}
