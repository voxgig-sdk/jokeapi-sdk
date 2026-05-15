# Jokeapi SDK utility: feature_add
module JokeapiUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
