# Jokeapi SDK utility: make_context

from core.context import JokeapiContext


def make_context_util(ctxmap, basectx):
    return JokeapiContext(ctxmap, basectx)
