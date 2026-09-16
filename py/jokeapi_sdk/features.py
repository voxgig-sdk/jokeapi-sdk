# Jokeapi SDK feature factory

from jokeapi_sdk.feature.base_feature import JokeapiBaseFeature
from jokeapi_sdk.feature.ratelimit_feature import JokeapiRatelimitFeature
from jokeapi_sdk.feature.retry_feature import JokeapiRetryFeature
from jokeapi_sdk.feature.test_feature import JokeapiTestFeature
from jokeapi_sdk.feature.timeout_feature import JokeapiTimeoutFeature


_FEATURES = {
    "base": lambda: JokeapiBaseFeature(),
    "ratelimit": lambda: JokeapiRatelimitFeature(),
    "retry": lambda: JokeapiRetryFeature(),
    "test": lambda: JokeapiTestFeature(),
    "timeout": lambda: JokeapiTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
