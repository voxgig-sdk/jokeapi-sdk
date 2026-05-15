# Jokeapi SDK configuration


def make_config():
    return {
        "main": {
            "name": "Jokeapi",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://v2.jokeapi.dev",
            "auth": {
                "prefix": "Bearer",
            },
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
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "format",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "joke",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "joke_language",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "system_language",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "version",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "info",
        "op": {
          "list": {
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
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/info",
                "parts": [
                  "info",
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "joke": {
        "fields": [],
        "name": "joke",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": "nsfw,racist,sexist",
                      "kind": "query",
                      "name": "blacklist_flag",
                      "orig": "blacklist_flag",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "C%23",
                      "kind": "query",
                      "name": "contain",
                      "orig": "contain",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "0-55",
                      "kind": "query",
                      "name": "id_range",
                      "orig": "id_range",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "safe_mode",
                      "orig": "safe_mode",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/joke/{category}",
                "parts": [
                  "joke",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "category": "id",
                  },
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "delivery",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "error",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "flag",
            "req": True,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "format_version",
            "req": True,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "joke",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "lang",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "message",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "setup",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "timestamp",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
        ],
        "name": "submit",
        "op": {
          "create": {
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "dry_run",
                      "orig": "dry_run",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/submit",
                "parts": [
                  "submit",
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
