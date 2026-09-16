"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('InfoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when JOKEAPI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('JOKEAPI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.JokeapiSDK.test();
        const ent = testsdk.Info();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.JOKEAPI_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'info.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "error", "req": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "formats", "req": false, "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "jokeLanguages", "req": false, "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "jokes", "req": false, "type": "`$OBJECT`", "index$": 3 }, { "active": true, "name": "systemLanguages", "req": false, "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "version", "req": false, "type": "`$STRING`", "index$": 5 }], "name": "info", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "en", "kind": "query", "name": "lang", "orig": "lang", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /info", "json": "{\"operationId\":\"getInfo\",\"parameters\":[{\"description\":\"Response format. Defaults to JSON if not specified.\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\",\"yaml\",\"txt\"],\"type\":\"string\"}},{\"description\":\"Language code for system messages following ISO 639-1 / Alpha-2 specification.\",\"in\":\"query\",\"name\":\"lang\",\"required\":false,\"schema\":{\"default\":\"en\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":false,\"type\":\"boolean\"},\"formats\":{\"example\":[\"json\",\"xml\",\"yaml\",\"txt\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"jokeLanguages\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"jokes\":{\"properties\":{\"categories\":{\"example\":[\"Programming\",\"Misc\",\"Dark\",\"Pun\",\"Spooky\",\"Christmas\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"flags\":{\"example\":[\"nsfw\",\"religious\",\"political\",\"racist\",\"sexist\",\"explicit\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"totalCount\":{\"example\":1368,\"type\":\"integer\"},\"types\":{\"example\":[\"single\",\"twopart\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"systemLanguages\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"version\":{\"example\":\"2.3.3\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with API information\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/info", "segments": [{ "lit": "info" }], "select": { "exist": ["format", "lang"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "info", "name__orig": "info", "Name": "Info", "name_": "info", "name-": "info", "NAME": "INFO", "index$": 0 }, { "active": true, "entity": "info", "key$": "BasicInfoFlow", "kind": "basic", "name": "BasicInfoFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "info_ref01" } }], "index$": 0 }] }, 'Info');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let info_ref01_data = Object.values(setup.data.existing.info)[0];
        // LIST
        const info_ref01_ent = client.Info();
        const info_ref01_match = {};
        const info_ref01_list = (await info_ref01_ent.list(info_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/info/InfoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.JokeapiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['info01', 'info02', 'info03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'JOKEAPI_TEST_INFO_ENTID': idmap,
        'JOKEAPI_TEST_LIVE': 'FALSE',
        'JOKEAPI_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['JOKEAPI_TEST_INFO_ENTID'];
    const live = 'TRUE' === env.JOKEAPI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['JOKEAPI_TEST_INFO_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.JokeapiSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=InfoEntity.test.js.map