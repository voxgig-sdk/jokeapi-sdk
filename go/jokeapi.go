package voxgigjokeapisdk

import (
	"github.com/voxgig-sdk/jokeapi-sdk/go/core"
	"github.com/voxgig-sdk/jokeapi-sdk/go/entity"
	"github.com/voxgig-sdk/jokeapi-sdk/go/feature"
	_ "github.com/voxgig-sdk/jokeapi-sdk/go/utility"
)

// Type aliases preserve external API.
type JokeapiSDK = core.JokeapiSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type JokeapiEntity = core.JokeapiEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type JokeapiError = core.JokeapiError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewInfoEntityFunc = func(client *core.JokeapiSDK, entopts map[string]any) core.JokeapiEntity {
		return entity.NewInfoEntity(client, entopts)
	}
	core.NewJokeEntityFunc = func(client *core.JokeapiSDK, entopts map[string]any) core.JokeapiEntity {
		return entity.NewJokeEntity(client, entopts)
	}
	core.NewSubmitEntityFunc = func(client *core.JokeapiSDK, entopts map[string]any) core.JokeapiEntity {
		return entity.NewSubmitEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewJokeapiSDK = core.NewJokeapiSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
