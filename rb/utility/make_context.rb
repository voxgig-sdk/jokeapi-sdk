# Jokeapi SDK utility: make_context
require_relative '../core/context'
module JokeapiUtilities
  MakeContext = ->(ctxmap, basectx) {
    JokeapiContext.new(ctxmap, basectx)
  }
end
