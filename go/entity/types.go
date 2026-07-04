// Typed models for the Jokeapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Info is the typed data model for the info entity.
type Info struct {
	Error *bool `json:"error,omitempty"`
	Format *[]any `json:"format,omitempty"`
	Joke *map[string]any `json:"joke,omitempty"`
	JokeLanguage *[]any `json:"joke_language,omitempty"`
	SystemLanguage *[]any `json:"system_language,omitempty"`
	Version *string `json:"version,omitempty"`
}

// InfoListMatch mirrors the info fields as an all-optional match
// filter (Go analog of Partial<Info>).
type InfoListMatch struct {
	Error *bool `json:"error,omitempty"`
	Format *[]any `json:"format,omitempty"`
	Joke *map[string]any `json:"joke,omitempty"`
	JokeLanguage *[]any `json:"joke_language,omitempty"`
	SystemLanguage *[]any `json:"system_language,omitempty"`
	Version *string `json:"version,omitempty"`
}

// Joke is the typed data model for the joke entity.
type Joke struct {
}

// JokeLoadMatch is the typed request payload for Joke.LoadTyped.
type JokeLoadMatch struct {
	Id string `json:"id"`
}

// Submit is the typed data model for the submit entity.
type Submit struct {
	Category string `json:"category"`
	Delivery *string `json:"delivery,omitempty"`
	Error *bool `json:"error,omitempty"`
	Flag map[string]any `json:"flag"`
	FormatVersion int `json:"format_version"`
	Joke *string `json:"joke,omitempty"`
	Lang string `json:"lang"`
	Message *string `json:"message,omitempty"`
	Setup *string `json:"setup,omitempty"`
	Timestamp *int `json:"timestamp,omitempty"`
	Type string `json:"type"`
}

// SubmitCreateData mirrors the submit fields as an all-optional match
// filter (Go analog of Partial<Submit>).
type SubmitCreateData struct {
	Category *string `json:"category,omitempty"`
	Delivery *string `json:"delivery,omitempty"`
	Error *bool `json:"error,omitempty"`
	Flag *map[string]any `json:"flag,omitempty"`
	FormatVersion *int `json:"format_version,omitempty"`
	Joke *string `json:"joke,omitempty"`
	Lang *string `json:"lang,omitempty"`
	Message *string `json:"message,omitempty"`
	Setup *string `json:"setup,omitempty"`
	Timestamp *int `json:"timestamp,omitempty"`
	Type *string `json:"type,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
