# Jokeapi SDK feature factory

from jokeapi_sdk.feature.base_feature import JokeapiBaseFeature
from jokeapi_sdk.feature.test_feature import JokeapiTestFeature


def _make_feature(name):
    features = {
        "base": lambda: JokeapiBaseFeature(),
        "test": lambda: JokeapiTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
