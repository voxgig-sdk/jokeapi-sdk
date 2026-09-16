# Jokeapi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module JokeapiFeatures
  def self.make_feature(name)
    case name
    when "base"
      JokeapiBaseFeature.new
    when "ratelimit"
      JokeapiRatelimitFeature.new
    when "retry"
      JokeapiRetryFeature.new
    when "test"
      JokeapiTestFeature.new
    when "timeout"
      JokeapiTimeoutFeature.new
    else
      JokeapiBaseFeature.new
    end
  end
end
