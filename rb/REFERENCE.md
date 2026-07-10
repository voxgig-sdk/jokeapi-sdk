# Jokeapi Ruby SDK Reference

Complete API reference for the Jokeapi Ruby SDK.


## JokeapiSDK

### Constructor

```ruby
require_relative 'Jokeapi_sdk'

client = JokeapiSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `JokeapiSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = JokeapiSDK.test
```


### Instance Methods

#### `Info(data = nil)`

Create a new `Info` entity instance. Pass `nil` for no initial data.

#### `Joke(data = nil)`

Create a new `Joke` entity instance. Pass `nil` for no initial data.

#### `Submit(data = nil)`

Create a new `Submit` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## InfoEntity

```ruby
info = client.Info
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `Boolean` | No |  |
| `format` | `Array` | No |  |
| `joke` | `Hash` | No |  |
| `joke_language` | `Array` | No |  |
| `system_language` | `Array` | No |  |
| `version` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Info.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InfoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## JokeEntity

```ruby
joke = client.Joke
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Joke.load({ "id" => "joke_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `JokeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubmitEntity

```ruby
submit = client.Submit
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `String` | Yes |  |
| `delivery` | `String` | No |  |
| `error` | `Boolean` | No |  |
| `flag` | `Hash` | Yes |  |
| `format_version` | `Integer` | Yes |  |
| `joke` | `String` | No |  |
| `lang` | `String` | Yes |  |
| `message` | `String` | No |  |
| `setup` | `String` | No |  |
| `timestamp` | `Integer` | No |  |
| `type` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Submit.create({
  "category" => "example_category", # String
  "flag" => {}, # Hash
  "format_version" => 1, # Integer
  "lang" => "example_lang", # String
  "type" => "example_type", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubmitEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = JokeapiSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

