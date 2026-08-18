<?php
declare(strict_types=1);

// Jokeapi SDK configuration

class JokeapiConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Jokeapi",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://v2.jokeapi.dev",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "info" => [],
                    "joke" => [],
                    "submit" => [],
                ],
            ],
            "entity" => [
        'info' => [
          'fields' => [
            [
              'name' => 'error',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'formats',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'jokeLanguages',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'jokes',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'systemLanguages',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'version',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'info',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'lang',
                        'orig' => 'lang',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/info',
                  'parts' => [
                    'info',
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                      'lang',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'joke' => [
          'fields' => [],
          'name' => 'joke',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'category',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'amount',
                        'orig' => 'amount',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'nsfw,racist,sexist',
                        'kind' => 'query',
                        'name' => 'blacklist_flag',
                        'orig' => 'blacklist_flag',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'C%23',
                        'kind' => 'query',
                        'name' => 'contain',
                        'orig' => 'contain',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '0-55',
                        'kind' => 'query',
                        'name' => 'id_range',
                        'orig' => 'id_range',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'lang',
                        'orig' => 'lang',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'safe_mode',
                        'orig' => 'safe_mode',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/joke/{category}',
                  'parts' => [
                    'joke',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'amount',
                      'blacklist_flag',
                      'contain',
                      'format',
                      'id',
                      'id_range',
                      'lang',
                      'safe_mode',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'submit' => [
          'fields' => [
            [
              'name' => 'category',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'delivery',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'error',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'flags',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'formatVersion',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'joke',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lang',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'message',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'setup',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'timestamp',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'type',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'submit',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'dry_run',
                        'orig' => 'dry_run',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/submit',
                  'parts' => [
                    'submit',
                  ],
                  'select' => [
                    'exist' => [
                      'dry_run',
                      'format',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return JokeapiFeatures::make_feature($name);
    }
}
