# Jokeapi SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Jokeapi",
            "slug": "jokeapi",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://v2.jokeapi.dev",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "info": {},
                "joke": {},
                "submit": {},
            },
        },
        "entity": {
      "info": {
        "fields": [
          {
            "name": "error",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "formats",
            "type": "`$ARRAY`",
          },
          {
            "name": "jokeLanguages",
            "type": "`$ARRAY`",
          },
          {
            "name": "jokes",
            "type": "`$OBJECT`",
          },
          {
            "name": "systemLanguages",
            "type": "`$ARRAY`",
          },
          {
            "name": "version",
            "type": "`$STRING`",
          },
        ],
        "name": "info",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/info",
                "segments": [
                  {
                    "lit": "info",
                  },
                ],
                "select": {
                  "exist": [
                    "format",
                    "lang",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "info",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "joke": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "joke",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "category",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "nsfw,racist,sexist",
                      "kind": "query",
                      "name": "blacklist_flag",
                      "orig": "blacklist_flag",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "C%23",
                      "kind": "query",
                      "name": "contain",
                      "orig": "contain",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "0-55",
                      "kind": "query",
                      "name": "id_range",
                      "orig": "id_range",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "safe_mode",
                      "orig": "safe_mode",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/joke/{category}",
                "rename": {
                  "param": {
                    "category": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "joke",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "amount",
                    "blacklist_flag",
                    "contain",
                    "format",
                    "id",
                    "id_range",
                    "lang",
                    "safe_mode",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "joke",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "submit": {
        "fields": [
          {
            "name": "category",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "delivery",
            "short": "The delivery/punchline (for twopart jokes only)",
            "type": "`$STRING`",
          },
          {
            "name": "error",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "flags",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "formatVersion",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "joke",
            "short": "The joke content (for single-type jokes only)",
            "type": "`$STRING`",
          },
          {
            "name": "lang",
            "req": True,
            "short": "Language code (ISO 639-1)",
            "type": "`$STRING`",
          },
          {
            "name": "message",
            "type": "`$STRING`",
          },
          {
            "name": "setup",
            "short": "The setup part (for twopart jokes only)",
            "type": "`$STRING`",
          },
          {
            "name": "timestamp",
            "short": "13-character UNIX timestamp",
            "type": "`$INTEGER`",
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "name": "submit",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "dry_run",
                      "orig": "dry_run",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/submit",
                "segments": [
                  {
                    "lit": "submit",
                  },
                ],
                "select": {
                  "exist": [
                    "dry_run",
                    "format",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "submit",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
