-- Jokeapi SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Jokeapi",
      slug = "jokeapi",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://v2.jokeapi.dev",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["info"] = {},
        ["joke"] = {},
        ["submit"] = {},
      },
    },
    entity = {
      ["info"] = {
        ["fields"] = {
          {
            ["name"] = "error",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "formats",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "jokeLanguages",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "jokes",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "systemLanguages",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "version",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "info",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "en",
                      ["kind"] = "query",
                      ["name"] = "lang",
                      ["orig"] = "lang",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/info",
                ["segments"] = {
                  {
                    ["lit"] = "info",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "format",
                    "lang",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "info",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["joke"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "joke",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "category",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "amount",
                      ["orig"] = "amount",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "nsfw,racist,sexist",
                      ["kind"] = "query",
                      ["name"] = "blacklist_flag",
                      ["orig"] = "blacklist_flag",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "C%23",
                      ["kind"] = "query",
                      ["name"] = "contain",
                      ["orig"] = "contain",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "0-55",
                      ["kind"] = "query",
                      ["name"] = "id_range",
                      ["orig"] = "id_range",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "en",
                      ["kind"] = "query",
                      ["name"] = "lang",
                      ["orig"] = "lang",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "safe_mode",
                      ["orig"] = "safe_mode",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/joke/{category}",
                ["rename"] = {
                  ["param"] = {
                    ["category"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "joke",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "amount",
                    "blacklist_flag",
                    "contain",
                    "format",
                    "id",
                    "id_range",
                    "lang",
                    "safe_mode",
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "joke",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["submit"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "delivery",
            ["short"] = "The delivery/punchline (for twopart jokes only)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "error",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "flags",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "formatVersion",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "joke",
            ["short"] = "The joke content (for single-type jokes only)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lang",
            ["req"] = true,
            ["short"] = "Language code (ISO 639-1)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "message",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "setup",
            ["short"] = "The setup part (for twopart jokes only)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "timestamp",
            ["short"] = "13-character UNIX timestamp",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "type",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "submit",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "dry_run",
                      ["orig"] = "dry_run",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/submit",
                ["segments"] = {
                  {
                    ["lit"] = "submit",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "dry_run",
                    "format",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "submit",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
