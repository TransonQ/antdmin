export async function browserMocking() {
  if (process.env.NODE_ENV !== 'development') {
    //TODO - 线上环境需要打开判断
    // return
  }

  const { worker } = await import('./browser')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}
