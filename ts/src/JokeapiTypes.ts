// Typed models for the Jokeapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Info {
  error?: boolean
  formats?: any[]
  jokeLanguages?: any[]
  jokes?: Record<string, any>
  systemLanguages?: any[]
  version?: string
}

export interface InfoListMatch {
  error?: boolean
  formats?: any[]
  jokeLanguages?: any[]
  jokes?: Record<string, any>
  systemLanguages?: any[]
  version?: string
}

export interface Joke {
  id?: string
}

export interface JokeLoadMatch {
  id: string
}

export interface Submit {
  category: string
  delivery?: string
  error?: boolean
  flags: Record<string, any>
  formatVersion: number
  joke?: string
  lang: string
  message?: string
  setup?: string
  timestamp?: number
  type: string
}

export interface SubmitCreateData {
  category: string
  delivery?: string
  error?: boolean
  flags: Record<string, any>
  formatVersion: number
  joke?: string
  lang: string
  message?: string
  setup?: string
  timestamp?: number
  type: string
}

