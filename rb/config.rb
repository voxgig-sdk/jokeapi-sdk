# Jokeapi SDK configuration

module JokeapiConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Jokeapi",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://v2.jokeapi.dev",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "info" => {},
          "joke" => {},
          "submit" => {},
        },
      },
      "entity" => {
        "info" => {
          "fields" => [
            {
              "name" => "error",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "formats",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "jokeLanguages",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "jokes",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "systemLanguages",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "version",
              "type" => "`$STRING`",
            },
          ],
          "name" => "info",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "en",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/info",
                  "parts" => [
                    "info",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                      "lang",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "joke" => {
          "fields" => [],
          "name" => "joke",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "category",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "amount",
                        "orig" => "amount",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => "nsfw,racist,sexist",
                        "kind" => "query",
                        "name" => "blacklist_flag",
                        "orig" => "blacklist_flag",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "C%23",
                        "kind" => "query",
                        "name" => "contain",
                        "orig" => "contain",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "0-55",
                        "kind" => "query",
                        "name" => "id_range",
                        "orig" => "id_range",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "en",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "safe_mode",
                        "orig" => "safe_mode",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/joke/{category}",
                  "parts" => [
                    "joke",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "category" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
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
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "submit" => {
          "fields" => [
            {
              "name" => "category",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "delivery",
              "type" => "`$STRING`",
            },
            {
              "name" => "error",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "flags",
              "req" => true,
              "type" => "`$OBJECT`",
            },
            {
              "name" => "formatVersion",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "joke",
              "type" => "`$STRING`",
            },
            {
              "name" => "lang",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "message",
              "type" => "`$STRING`",
            },
            {
              "name" => "setup",
              "type" => "`$STRING`",
            },
            {
              "name" => "timestamp",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "type",
              "req" => true,
              "type" => "`$STRING`",
            },
          ],
          "name" => "submit",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "dry_run",
                        "orig" => "dry_run",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/submit",
                  "parts" => [
                    "submit",
                  ],
                  "select" => {
                    "exist" => [
                      "dry_run",
                      "format",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    JokeapiFeatures.make_feature(name)
  end
end
