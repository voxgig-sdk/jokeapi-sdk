

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { JokeapiSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('JokeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JOKEAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('JOKEAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JokeapiSDK.test()
    const ent = testsdk.Joke()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JOKEAPI_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'joke.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"joke","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"category","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"amount","orig":"amount","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":"nsfw,racist,sexist","kind":"query","name":"blacklist_flag","orig":"blacklist_flag","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"C%23","kind":"query","name":"contain","orig":"contain","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"0-55","kind":"query","name":"id_range","orig":"id_range","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":"en","kind":"query","name":"lang","orig":"lang","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"safe_mode","orig":"safe_mode","reqd":false,"type":"`$BOOLEAN`","index$":6},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$STRING`","index$":7}]},"contract":{"id":"GET /joke/{category}","json":"{\"operationId\":\"getJoke\",\"parameters\":[{\"description\":\"Category of jokes to retrieve. Use 'Any' for random category or specify one or more categories separated by commas.\",\"in\":\"path\",\"name\":\"category\",\"required\":true,\"schema\":{\"enum\":[\"Any\",\"Programming\",\"Misc\",\"Dark\",\"Pun\",\"Spooky\",\"Christmas\"],\"type\":\"string\"}},{\"description\":\"Response format. Defaults to JSON if not specified.\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\",\"yaml\",\"txt\"],\"type\":\"string\"}},{\"description\":\"Comma or plus-separated list of flags to blacklist. Jokes matching these flags will not be served.\",\"example\":\"nsfw,racist,sexist\",\"in\":\"query\",\"name\":\"blacklistFlags\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Language code following ISO 639-1 / Alpha-2 specification. Returns jokes in the specified language.\",\"example\":\"en\",\"in\":\"query\",\"name\":\"lang\",\"required\":false,\"schema\":{\"default\":\"en\",\"type\":\"string\"}},{\"description\":\"Type of joke to retrieve. If not specified, both types will be returned.\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"enum\":[\"single\",\"twopart\"],\"type\":\"string\"}},{\"description\":\"Search string - only jokes containing this string will be served (case insensitive). Special characters must be percent-encoded.\",\"example\":\"C%23\",\"in\":\"query\",\"name\":\"contains\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"ID range of jokes to retrieve. Can be a single ID or a range separated by minus, comma, or plus sign (e.g., '0-55' or '33').\",\"example\":\"0-55\",\"in\":\"query\",\"name\":\"idRange\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of jokes to retrieve in a single request. Maximum is 10, defaults to 1.\",\"in\":\"query\",\"name\":\"amount\",\"required\":false,\"schema\":{\"default\":1,\"maximum\":10,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"If enabled, only safe jokes will be served (no explicit content).\",\"in\":\"query\",\"name\":\"safe-mode\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"category\":{\"enum\":[\"Programming\",\"Misc\",\"Dark\",\"Pun\",\"Spooky\",\"Christmas\"],\"example\":\"Programming\",\"type\":\"string\"},\"error\":{\"example\":false,\"type\":\"boolean\"},\"flags\":{\"properties\":{\"explicit\":{\"description\":\"Contains explicit language\",\"example\":false,\"type\":\"boolean\"},\"nsfw\":{\"description\":\"Not safe for work\",\"example\":false,\"type\":\"boolean\"},\"political\":{\"description\":\"Contains political content\",\"example\":false,\"type\":\"boolean\"},\"racist\":{\"description\":\"Contains racist content\",\"example\":false,\"type\":\"boolean\"},\"religious\":{\"description\":\"Contains religious content\",\"example\":false,\"type\":\"boolean\"},\"sexist\":{\"description\":\"Contains sexist content\",\"example\":false,\"type\":\"boolean\"}},\"required\":[\"nsfw\",\"religious\",\"political\",\"racist\",\"sexist\",\"explicit\"],\"type\":\"object\"},\"id\":{\"example\":12,\"type\":\"integer\"},\"joke\":{\"example\":\"// This line doesn't actually do anything, but the code stops working when I delete it.\",\"type\":\"string\"},\"lang\":{\"example\":\"en\",\"type\":\"string\"},\"safe\":{\"example\":true,\"type\":\"boolean\"},\"type\":{\"enum\":[\"single\"],\"example\":\"single\",\"type\":\"string\"}},\"required\":[\"error\",\"category\",\"type\",\"joke\",\"flags\",\"id\",\"lang\"],\"type\":\"object\"},{\"properties\":{\"category\":{\"enum\":[\"Programming\",\"Misc\",\"Dark\",\"Pun\",\"Spooky\",\"Christmas\"],\"example\":\"Programming\",\"type\":\"string\"},\"delivery\":{\"example\":\"Because they need to C#\",\"type\":\"string\"},\"error\":{\"example\":false,\"type\":\"boolean\"},\"flags\":{\"properties\":{\"explicit\":{\"description\":\"Contains explicit language\",\"example\":false,\"type\":\"boolean\"},\"nsfw\":{\"description\":\"Not safe for work\",\"example\":false,\"type\":\"boolean\"},\"political\":{\"description\":\"Contains political content\",\"example\":false,\"type\":\"boolean\"},\"racist\":{\"description\":\"Contains racist content\",\"example\":false,\"type\":\"boolean\"},\"religious\":{\"description\":\"Contains religious content\",\"example\":false,\"type\":\"boolean\"},\"sexist\":{\"description\":\"Contains sexist content\",\"example\":false,\"type\":\"boolean\"}},\"required\":[\"nsfw\",\"religious\",\"political\",\"racist\",\"sexist\",\"explicit\"],\"type\":\"object\"},\"id\":{\"example\":51,\"type\":\"integer\"},\"lang\":{\"example\":\"en\",\"type\":\"string\"},\"safe\":{\"example\":true,\"type\":\"boolean\"},\"setup\":{\"example\":\"Why do programmers wear glasses?\",\"type\":\"string\"},\"type\":{\"enum\":[\"twopart\"],\"example\":\"twopart\",\"type\":\"string\"}},\"required\":[\"error\",\"category\",\"type\",\"setup\",\"delivery\",\"flags\",\"id\",\"lang\"],\"type\":\"object\"},{\"properties\":{\"amount\":{\"example\":5,\"type\":\"integer\"},\"error\":{\"example\":false,\"type\":\"boolean\"},\"jokes\":{\"items\":{\"oneOf\":[{\"properties\":{\"category\":{\"enum\":[\"Programming\",\"Misc\",\"Dark\",\"Pun\",\"Spooky\",\"Christmas\"],\"example\":\"Programming\",\"type\":\"string\"},\"error\":{\"example\":false,\"type\":\"boolean\"},\"flags\":{\"properties\":{\"explicit\":{\"description\":\"Contains explicit language\",\"example\":false,\"type\":\"boolean\"},\"nsfw\":{\"description\":\"Not safe for work\",\"example\":false,\"type\":\"boolean\"},\"political\":{\"description\":\"Contains political content\",\"example\":false,\"type\":\"boolean\"},\"racist\":{\"description\":\"Contains racist content\",\"example\":false,\"type\":\"boolean\"},\"religious\":{\"description\":\"Contains religious content\",\"example\":false,\"type\":\"boolean\"},\"sexist\":{\"description\":\"Contains sexist content\",\"example\":false,\"type\":\"boolean\"}},\"required\":[\"nsfw\",\"religious\",\"political\",\"racist\",\"sexist\",\"explicit\"],\"type\":\"object\"},\"id\":{\"example\":12,\"type\":\"integer\"},\"joke\":{\"example\":\"// This line doesn't actually do anything, but the code stops working when I delete it.\",\"type\":\"string\"},\"lang\":{\"example\":\"en\",\"type\":\"string\"},\"safe\":{\"example\":true,\"type\":\"boolean\"},\"type\":{\"enum\":[\"single\"],\"example\":\"single\",\"type\":\"string\"}},\"required\":[\"error\",\"category\",\"type\",\"joke\",\"flags\",\"id\",\"lang\"],\"type\":\"object\"},{\"properties\":{\"category\":{\"enum\":[\"Programming\",\"Misc\",\"Dark\",\"Pun\",\"Spooky\",\"Christmas\"],\"example\":\"Programming\",\"type\":\"string\"},\"delivery\":{\"example\":\"Because they need to C#\",\"type\":\"string\"},\"error\":{\"example\":false,\"type\":\"boolean\"},\"flags\":{\"properties\":{\"explicit\":{\"description\":\"Contains explicit language\",\"example\":false,\"type\":\"boolean\"},\"nsfw\":{\"description\":\"Not safe for work\",\"example\":false,\"type\":\"boolean\"},\"political\":{\"description\":\"Contains political content\",\"example\":false,\"type\":\"boolean\"},\"racist\":{\"description\":\"Contains racist content\",\"example\":false,\"type\":\"boolean\"},\"religious\":{\"description\":\"Contains religious content\",\"example\":false,\"type\":\"boolean\"},\"sexist\":{\"description\":\"Contains sexist content\",\"example\":false,\"type\":\"boolean\"}},\"required\":[\"nsfw\",\"religious\",\"political\",\"racist\",\"sexist\",\"explicit\"],\"type\":\"object\"},\"id\":{\"example\":51,\"type\":\"integer\"},\"lang\":{\"example\":\"en\",\"type\":\"string\"},\"safe\":{\"example\":true,\"type\":\"boolean\"},\"setup\":{\"example\":\"Why do programmers wear glasses?\",\"type\":\"string\"},\"type\":{\"enum\":[\"twopart\"],\"example\":\"twopart\",\"type\":\"string\"}},\"required\":[\"error\",\"category\",\"type\",\"setup\",\"delivery\",\"flags\",\"id\",\"lang\"],\"type\":\"object\"}]},\"type\":\"array\"}},\"required\":[\"error\",\"amount\",\"jokes\"],\"type\":\"object\"}]}},\"application/xml\":{\"schema\":{\"type\":\"string\"}},\"application/yaml\":{\"schema\":{\"type\":\"string\"}},\"text/plain\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful response with joke(s)\",\"headers\":{\"RateLimit-Limit\":{\"description\":\"Total requests allowed per minute\",\"schema\":{\"type\":\"integer\"}},\"RateLimit-Remaining\":{\"description\":\"Remaining requests in current budget\",\"schema\":{\"type\":\"integer\"}},\"RateLimit-Reset\":{\"description\":\"IMF-fixdate timestamp when request budget resets\",\"schema\":{\"type\":\"string\"}},\"Retry-After\":{\"description\":\"Seconds until request budget resets\",\"schema\":{\"type\":\"integer\"}}}},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"additionalInfo\":{\"type\":\"string\"},\"causedBy\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"code\":{\"example\":400,\"type\":\"integer\"},\"error\":{\"example\":true,\"type\":\"boolean\"},\"internalError\":{\"example\":false,\"type\":\"boolean\"},\"message\":{\"example\":\"Invalid parameter value\",\"type\":\"string\"},\"timestamp\":{\"description\":\"13-character UNIX timestamp\",\"type\":\"integer\"}},\"required\":[\"error\",\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"additionalInfo\":{\"type\":\"string\"},\"causedBy\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"code\":{\"example\":400,\"type\":\"integer\"},\"error\":{\"example\":true,\"type\":\"boolean\"},\"internalError\":{\"example\":false,\"type\":\"boolean\"},\"message\":{\"example\":\"Invalid parameter value\",\"type\":\"string\"},\"timestamp\":{\"description\":\"13-character UNIX timestamp\",\"type\":\"integer\"}},\"required\":[\"error\",\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Rate limit exceeded - too many requests\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/joke/{category}","rename":{"param":{"category":"id"}},"segments":[{"lit":"joke"},{"var":"id"}],"select":{"exist":["amount","blacklist_flag","contain","format","id","id_range","lang","safe_mode","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"joke","name__orig":"joke","Name":"Joke","name_":"joke","name-":"joke","NAME":"JOKE","index$":1}, {"active":true,"entity":"joke","key$":"BasicJokeFlow","kind":"basic","name":"BasicJokeFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"joke_ref01","srcdatavar":"joke_ref01_data","suffix":"_dt0"},"match":{"id":"joke01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-joke_ref01"}}],"index$":0}]}, 'Joke')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let joke_ref01_data = Object.values(setup.data.existing.joke)[0] as any

    // LOAD
    const joke_ref01_ent = client.Joke()
    const joke_ref01_match_dt0: any = {}
    joke_ref01_match_dt0.id = joke_ref01_data.id
    const joke_ref01_data_dt0 = (await joke_ref01_ent.load(joke_ref01_match_dt0)).data()
    assert(joke_ref01_data_dt0.id === joke_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/joke/JokeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = JokeapiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['joke01','joke02','joke03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JOKEAPI_TEST_JOKE_ENTID': idmap,
    'JOKEAPI_TEST_LIVE': 'FALSE',
    'JOKEAPI_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JOKEAPI_TEST_JOKE_ENTID']

  const live = 'TRUE' === env.JOKEAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JOKEAPI_TEST_JOKE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new JokeapiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.JOKEAPI_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
