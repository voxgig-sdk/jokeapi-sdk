
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { JokeapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await JokeapiSDK.test()
    equal(null !== testsdk, true)
  })

})
