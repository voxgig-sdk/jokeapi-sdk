# Jokeapi SDK

Fetch uniformly formatted jokes across multiple languages and categories with no auth required

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About JokeAPI

[JokeAPI](https://v2.jokeapi.dev) is a community REST API that serves jokes in a consistent, well-formatted shape, created and maintained by [Sv443](https://github.com/Sv443). It is open to anyone — no token, membership, registration, or payment is required for standard use.

What you get from the API:

- Jokes drawn from a curated set across categories: `Programming`, `Miscellaneous`, `Dark`, `Pun`, `Spooky`, `Christmas`, plus an `Any` selector.
- Two joke shapes: `single` (one-liner) and `twopart` (setup + delivery).
- Filters by category, blacklist flags (e.g. `nsfw`, `religious`, `political`, `racist`, `sexist`, `explicit`), language, joke type, ID range, and free-text search.
- Multiple response formats: JSON, XML, YAML, or plain text.
- Supporting endpoints for API info, category list, supported languages, content flags, response formats, and a ping check.
- A submission endpoint for proposing new jokes.

Operational notes: standard clients are rate-limited to roughly 120 requests per minute, with joke submissions limited more strictly; exceeding limits returns HTTP 429. Higher-volume clients may use an `Authorization` header token if whitelisted. The base URL is `https://v2.jokeapi.dev`.

## Try it

**TypeScript**
```bash
npm install jokeapi
```

**Python**
```bash
pip install jokeapi-sdk
```

**PHP**
```bash
composer require voxgig/jokeapi-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/jokeapi-sdk/go
```

**Ruby**
```bash
gem install jokeapi-sdk
```

**Lua**
```bash
luarocks install jokeapi-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { JokeapiSDK } from 'jokeapi'

const client = new JokeapiSDK({})

// List all infos
const infos = await client.Info().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o jokeapi-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "jokeapi": {
      "command": "/abs/path/to/jokeapi-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Info** | API metadata and supporting lookups — endpoints like `/info`, `/categories`, `/languages`, `/flags`, `/formats`, and `/ping` that describe what the service supports and confirm it is reachable. | `/info` |
| **Joke** | The core joke resource — `GET /joke/{category}` returns one or more jokes filtered by category, blacklist flags, language, type, ID, or search string. | `/joke/{category}` |
| **Submit** | Joke submission endpoint — `POST /submit` accepts a candidate joke payload for review by the JokeAPI maintainers. | `/submit` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from jokeapi_sdk import JokeapiSDK

client = JokeapiSDK({})

# List all infos
infos, err = client.Info(None).list(None, None)
```

### PHP

```php
<?php
require_once 'jokeapi_sdk.php';

$client = new JokeapiSDK([]);

// List all infos
[$infos, $err] = $client->Info(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/jokeapi-sdk/go"

client := sdk.NewJokeapiSDK(map[string]any{})

// List all infos
infos, err := client.Info(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Jokeapi_sdk"

client = JokeapiSDK.new({})

# List all infos
infos, err = client.Info(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("jokeapi_sdk")

local client = sdk.new({})

-- List all infos
local infos, err = client:Info(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = JokeapiSDK.test()
const result = await client.Info().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = JokeapiSDK.test(None, None)
result, err = client.Info(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = JokeapiSDK::test(null, null);
[$result, $err] = $client->Info(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Info(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = JokeapiSDK.test(nil, nil)
result, err = client.Info(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Info(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the JokeAPI

- Upstream: [https://jokeapi.dev](https://jokeapi.dev)
- API docs: [https://v2.jokeapi.dev](https://v2.jokeapi.dev)

- Licensed under the MIT License.
- Free for personal and commercial use without API key, registration, or payment.
- Attribution to JokeAPI / Sv443 is appreciated but not required by the project documentation.

---

Generated from the JokeAPI OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
