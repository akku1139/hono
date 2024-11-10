import type { Result, Router } from '../../router'

export class CacheRouter<T> implements Router<T> {
  name = "CacheRouter"

  router: Router<T>

  routingCache: Map<[string, string], Result<T>> = new Map()

  constructor(init: {
    router: Router<T>
  }) {
    this.router = init.router
  }

  add(method: string, path: string, handler: T): void {
    this.routingCache = new Map()
    this.router.add(method, path, handler)
  }

  match(method: string, path: string): Result<T> {
    const cache = this.routingCache.get([method, path])

    if(cache === void 0) {
      const route = this.router.match(method, path)
      this.routingCache.set([method, path], route)
      return route
    }

    return cache
  }
}
