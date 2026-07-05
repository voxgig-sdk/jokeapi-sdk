// Typed models for the Jokeapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Info {
  error?: boolean
  format?: any[]
  joke?: Record<string, any>
  joke_language?: any[]
  system_language?: any[]
  version?: string
}

export interface InfoListMatch {
  error?: boolean
  format?: any[]
  joke?: Record<string, any>
  joke_language?: any[]
  system_language?: any[]
  version?: string
}

export interface Joke {
}

export interface JokeLoadMatch {
  id: string
}

export interface Submit {
  category: string
  delivery?: string
  error?: boolean
  flag: Record<string, any>
  format_version: number
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
  flag: Record<string, any>
  format_version: number
  joke?: string
  lang: string
  message?: string
  setup?: string
  timestamp?: number
  type: string
}

