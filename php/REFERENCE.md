# Jokeapi PHP SDK Reference

Complete API reference for the Jokeapi PHP SDK.


## JokeapiSDK

### Constructor

```php
require_once __DIR__ . '/jokeapi_sdk.php';

$client = new JokeapiSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `JokeapiSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = JokeapiSDK::test();
```


### Instance Methods

#### `Info($data = null)`

Create a new `InfoEntity` instance. Pass `null` for no initial data.

#### `Joke($data = null)`

Create a new `JokeEntity` instance. Pass `null` for no initial data.

#### `Submit($data = null)`

Create a new `SubmitEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## InfoEntity

```php
$info = $client->Info();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | ``$BOOLEAN`` | No |  |
| `format` | ``$ARRAY`` | No |  |
| `joke` | ``$OBJECT`` | No |  |
| `joke_language` | ``$ARRAY`` | No |  |
| `system_language` | ``$ARRAY`` | No |  |
| `version` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Info()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): InfoEntity`

Create a new `InfoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## JokeEntity

```php
$joke = $client->Joke();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Joke()->load(["id" => "joke_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): JokeEntity`

Create a new `JokeEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SubmitEntity

```php
$submit = $client->Submit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | ``$STRING`` | Yes |  |
| `delivery` | ``$STRING`` | No |  |
| `error` | ``$BOOLEAN`` | No |  |
| `flag` | ``$OBJECT`` | Yes |  |
| `format_version` | ``$INTEGER`` | Yes |  |
| `joke` | ``$STRING`` | No |  |
| `lang` | ``$STRING`` | Yes |  |
| `message` | ``$STRING`` | No |  |
| `setup` | ``$STRING`` | No |  |
| `timestamp` | ``$INTEGER`` | No |  |
| `type` | ``$STRING`` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): array`

Create a new entity with the given data.

```php
[$result, $err] = $client->Submit()->create([
  "category" => /* `$STRING` */,
  "flag" => /* `$OBJECT` */,
  "format_version" => /* `$INTEGER` */,
  "lang" => /* `$STRING` */,
  "type" => /* `$STRING` */,
]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SubmitEntity`

Create a new `SubmitEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new JokeapiSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

