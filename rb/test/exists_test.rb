# Jokeapi SDK exists test

require "minitest/autorun"
require_relative "../Jokeapi_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = JokeapiSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
