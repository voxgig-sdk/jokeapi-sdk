# ProjectName SDK exists test

import pytest
from jokeapi_sdk import JokeapiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = JokeapiSDK.test(None, None)
        assert testsdk is not None
