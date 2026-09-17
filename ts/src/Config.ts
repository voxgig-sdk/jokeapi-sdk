
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Jokeapi',
        slug: "jokeapi",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://v2.jokeapi.dev",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        info: {
        },
  
        joke: {
        },
  
        submit: {
        },
  
    }
  }


  entity = {
    "info": {
      "fields": [
        {
          "name": "error",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "formats",
          "type": "`$ARRAY`"
        },
        {
          "name": "jokeLanguages",
          "type": "`$ARRAY`"
        },
        {
          "name": "jokes",
          "type": "`$OBJECT`"
        },
        {
          "name": "systemLanguages",
          "type": "`$ARRAY`"
        },
        {
          "name": "version",
          "type": "`$STRING`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/info",
              "segments": [
                {
                  "lit": "info"
                }
              ],
              "select": {
                "exist": [
                  "format",
                  "lang"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "info"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "joke": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "amount",
                    "orig": "amount",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "nsfw,racist,sexist",
                    "kind": "query",
                    "name": "blacklist_flag",
                    "orig": "blacklist_flag",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "C%23",
                    "kind": "query",
                    "name": "contain",
                    "orig": "contain",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "0-55",
                    "kind": "query",
                    "name": "id_range",
                    "orig": "id_range",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "safe_mode",
                    "orig": "safe_mode",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/joke/{category}",
              "rename": {
                "param": {
                  "category": "id"
                }
              },
              "segments": [
                {
                  "lit": "joke"
                },
                {
                  "var": "id"
                }
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
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "joke",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "submit": {
      "fields": [
        {
          "name": "category",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "delivery",
          "short": "The delivery/punchline (for twopart jokes only)",
          "type": "`$STRING`"
        },
        {
          "name": "error",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "flags",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "formatVersion",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "joke",
          "short": "The joke content (for single-type jokes only)",
          "type": "`$STRING`"
        },
        {
          "name": "lang",
          "req": true,
          "short": "Language code (ISO 639-1)",
          "type": "`$STRING`"
        },
        {
          "name": "message",
          "type": "`$STRING`"
        },
        {
          "name": "setup",
          "short": "The setup part (for twopart jokes only)",
          "type": "`$STRING`"
        },
        {
          "name": "timestamp",
          "short": "13-character UNIX timestamp",
          "type": "`$INTEGER`"
        },
        {
          "name": "type",
          "req": true,
          "type": "`$STRING`"
        }
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
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/submit",
              "segments": [
                {
                  "lit": "submit"
                }
              ],
              "select": {
                "exist": [
                  "dry_run",
                  "format"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "submit"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

