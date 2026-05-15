
import { Context } from './Context'


class JokeapiError extends Error {

  isJokeapiError = true

  sdk = 'Jokeapi'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  JokeapiError
}

