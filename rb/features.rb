# Jokeapi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module JokeapiFeatures
  def self.make_feature(name)
    case name
    when "base"
      JokeapiBaseFeature.new
    when "test"
      JokeapiTestFeature.new
    else
      JokeapiBaseFeature.new
    end
  end
end
