import { runTest } from '../common.case.test'
import { RegExpRouter } from '../reg-exp-router'
import { CacheRouter } from './router'

describe('CacheRouter', () => {
  runTest({
    newRouter: () =>
      new CacheRouter({
        router: new RegExpRouter(),
      }),
  })
})
