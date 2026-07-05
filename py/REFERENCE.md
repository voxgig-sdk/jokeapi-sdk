# Jokeapi Python SDK Reference

Complete API reference for the Jokeapi Python SDK.


## JokeapiSDK

### Constructor

```python
from jokeapi_sdk import JokeapiSDK

client = JokeapiSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `JokeapiSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = JokeapiSDK.test()
```


### Instance Methods

#### `Info(data=None)`

Create a new `InfoEntity` instance. Pass `None` for no initial data.

#### `Joke(data=None)`

Create a new `JokeEntity` instance. Pass `None` for no initial data.

#### `Submit(data=None)`

Create a new `SubmitEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## InfoEntity

```python
info = client.Info()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `bool` | No |  |
| `format` | `list` | No |  |
| `joke` | `dict` | No |  |
| `joke_language` | `list` | No |  |
| `system_language` | `list` | No |  |
| `version` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Info().list()
for info in results:
    print(info)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## JokeEntity

```python
joke = client.Joke()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Joke().load({"id": "joke_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JokeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubmitEntity

```python
submit = client.Submit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | Yes |  |
| `delivery` | `str` | No |  |
| `error` | `bool` | No |  |
| `flag` | `dict` | Yes |  |
| `format_version` | `int` | Yes |  |
| `joke` | `str` | No |  |
| `lang` | `str` | Yes |  |
| `message` | `str` | No |  |
| `setup` | `str` | No |  |
| `timestamp` | `int` | No |  |
| `type` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Submit().create({
    "category": "example",  # str
    "flag": {},  # dict
    "format_version": 1,  # int
    "lang": "example",  # str
    "type": "example",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubmitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = JokeapiSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

