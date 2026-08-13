# Jokeapi SDK utility: make_context

from projectname_sdk.core.context import JokeapiContext


def make_context_util(ctxmap, basectx):
    return JokeapiContext(ctxmap, basectx)
