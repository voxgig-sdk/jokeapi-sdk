-- Jokeapi SDK error

local JokeapiError = {}
JokeapiError.__index = JokeapiError


function JokeapiError.new(code, msg, ctx)
  local self = setmetatable({}, JokeapiError)
  self.is_sdk_error = true
  self.sdk = "Jokeapi"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function JokeapiError:error()
  return self.msg
end


function JokeapiError:__tostring()
  return self.msg
end


return JokeapiError
