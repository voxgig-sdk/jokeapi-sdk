-- Jokeapi SDK exists test

local sdk = require("jokeapi_sdk")

describe("JokeapiSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
