package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewInfoEntityFunc func(client *JokeapiSDK, entopts map[string]any) JokeapiEntity

var NewJokeEntityFunc func(client *JokeapiSDK, entopts map[string]any) JokeapiEntity

var NewSubmitEntityFunc func(client *JokeapiSDK, entopts map[string]any) JokeapiEntity

