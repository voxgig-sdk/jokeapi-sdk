# Jokeapi Lua SDK Reference

Complete API reference for the Jokeapi Lua SDK.


## JokeapiSDK

### Constructor

```lua
local sdk = require("jokeapi_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Info(data)`

Create a new `Info` entity instance. Pass `nil` for no initial data.

#### `Joke(data)`

Create a new `Joke` entity instance. Pass `nil` for no initial data.

#### `Submit(data)`

Create a new `Submit` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## InfoEntity

```lua
local info = client:Info(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `boolean` | No |  |
| `format` | `table` | No |  |
| `joke` | `table` | No |  |
| `joke_language` | `table` | No |  |
| `system_language` | `table` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Info():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InfoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## JokeEntity

```lua
local joke = client:Joke(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Joke():load({ id = "joke_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JokeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubmitEntity

```lua
local submit = client:Submit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes |  |
| `delivery` | `string` | No |  |
| `error` | `boolean` | No |  |
| `flag` | `table` | Yes |  |
| `format_version` | `number` | Yes |  |
| `joke` | `string` | No |  |
| `lang` | `string` | Yes |  |
| `message` | `string` | No |  |
| `setup` | `string` | No |  |
| `timestamp` | `number` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Submit():create({
  category = --[[ string ]],
  flag = --[[ table ]],
  format_version = --[[ number ]],
  lang = --[[ string ]],
  type = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubmitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

