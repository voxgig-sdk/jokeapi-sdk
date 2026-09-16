

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


describe('SubmitEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JOKEAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('JOKEAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JokeapiSDK.test()
    const ent = testsdk.Submit()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JOKEAPI_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'submit.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"category","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"delivery","req":false,"short":"The delivery/punchline (for twopart jokes only)","type":"`$STRING`","index$":1},{"active":true,"name":"error","req":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"name":"flags","req":true,"type":"`$OBJECT`","index$":3},{"active":true,"name":"formatVersion","req":true,"type":"`$INTEGER`","index$":4},{"active":true,"name":"joke","req":false,"short":"The joke content (for single-type jokes only)","type":"`$STRING`","index$":5},{"active":true,"name":"lang","req":true,"short":"Language code (ISO 639-1)","type":"`$STRING`","index$":6},{"active":true,"name":"message","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"setup","req":false,"short":"The setup part (for twopart jokes only)","type":"`$STRING`","index$":8},{"active":true,"name":"timestamp","req":false,"short":"13-character UNIX timestamp","type":"`$INTEGER`","index$":9},{"active":true,"name":"type","req":true,"type":"`$STRING`","index$":10}],"name":"submit","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"dry_run","orig":"dry_run","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /submit","json":"{\"operationId\":\"submitJoke\",\"parameters\":[{\"description\":\"If present, validates the joke without actually saving it to the API.\",\"in\":\"query\",\"name\":\"dry-run\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Response format. Defaults to JSON if not specified.\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\",\"yaml\",\"txt\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"category\":{\"enum\":[\"Misc\",\"Programming\",\"Dark\",\"Pun\",\"Spooky\",\"Christmas\"],\"example\":\"Programming\",\"type\":\"string\"},\"delivery\":{\"description\":\"The delivery/punchline (for twopart jokes only)\",\"type\":\"string\"},\"flags\":{\"properties\":{\"explicit\":{\"description\":\"Contains explicit language\",\"example\":false,\"type\":\"boolean\"},\"nsfw\":{\"description\":\"Not safe for work\",\"example\":false,\"type\":\"boolean\"},\"political\":{\"description\":\"Contains political content\",\"example\":false,\"type\":\"boolean\"},\"racist\":{\"description\":\"Contains racist content\",\"example\":false,\"type\":\"boolean\"},\"religious\":{\"description\":\"Contains religious content\",\"example\":false,\"type\":\"boolean\"},\"sexist\":{\"description\":\"Contains sexist content\",\"example\":false,\"type\":\"boolean\"}},\"required\":[\"nsfw\",\"religious\",\"political\",\"racist\",\"sexist\",\"explicit\"],\"type\":\"object\"},\"formatVersion\":{\"example\":3,\"type\":\"integer\"},\"joke\":{\"description\":\"The joke content (for single-type jokes only)\",\"type\":\"string\"},\"lang\":{\"description\":\"Language code (ISO 639-1)\",\"example\":\"en\",\"type\":\"string\"},\"setup\":{\"description\":\"The setup part (for twopart jokes only)\",\"type\":\"string\"},\"type\":{\"enum\":[\"single\",\"twopart\"],\"example\":\"single\",\"type\":\"string\"}},\"required\":[\"formatVersion\",\"category\",\"type\",\"flags\",\"lang\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":false,\"type\":\"boolean\"},\"message\":{\"example\":\"Joke submitted successfully\",\"type\":\"string\"},\"timestamp\":{\"description\":\"13-character UNIX timestamp\",\"example\":1234567890123,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Joke submitted successfully or dry-run validation successful\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"additionalInfo\":{\"type\":\"string\"},\"causedBy\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"code\":{\"example\":400,\"type\":\"integer\"},\"error\":{\"example\":true,\"type\":\"boolean\"},\"internalError\":{\"example\":false,\"type\":\"boolean\"},\"message\":{\"example\":\"Invalid parameter value\",\"type\":\"string\"},\"timestamp\":{\"description\":\"13-character UNIX timestamp\",\"type\":\"integer\"}},\"required\":[\"error\",\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Bad request - invalid joke submission\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"additionalInfo\":{\"type\":\"string\"},\"causedBy\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"code\":{\"example\":400,\"type\":\"integer\"},\"error\":{\"example\":true,\"type\":\"boolean\"},\"internalError\":{\"example\":false,\"type\":\"boolean\"},\"message\":{\"example\":\"Invalid parameter value\",\"type\":\"string\"},\"timestamp\":{\"description\":\"13-character UNIX timestamp\",\"type\":\"integer\"}},\"required\":[\"error\",\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Rate limit exceeded - maximum 5 requests per minute for submissions\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/submit","segments":[{"lit":"submit"}],"select":{"exist":["dry_run","format"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"submit","name__orig":"submit","Name":"Submit","name_":"submit","name-":"submit","NAME":"SUBMIT","index$":2}, {"active":true,"entity":"submit","key$":"BasicSubmitFlow","kind":"basic","name":"BasicSubmitFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"submit_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Submit')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const submit_ref01_ent = client.Submit()
    let submit_ref01_data = setup.data.new.submit['submit_ref01']

    submit_ref01_data = (await submit_ref01_ent.create(submit_ref01_data)).data()
    assert(null != submit_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/submit/SubmitTestData.json')

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
    ['submit01','submit02','submit03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JOKEAPI_TEST_SUBMIT_ENTID': idmap,
    'JOKEAPI_TEST_LIVE': 'FALSE',
    'JOKEAPI_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JOKEAPI_TEST_SUBMIT_ENTID']

  const live = 'TRUE' === env.JOKEAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JOKEAPI_TEST_SUBMIT_ENTID']
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
  
