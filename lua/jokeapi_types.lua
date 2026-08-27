-- Typed models for the Jokeapi SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Info
---@field error? boolean
---@field formats? table
---@field jokeLanguages? table
---@field jokes? table
---@field systemLanguages? table
---@field version? string

---@class InfoListMatch
---@field error? boolean
---@field formats? table
---@field jokeLanguages? table
---@field jokes? table
---@field systemLanguages? table
---@field version? string

---@class Joke
---@field id? string

---@class JokeLoadMatch
---@field id string

---@class Submit
---@field category string
---@field delivery? string
---@field error? boolean
---@field flags table
---@field formatVersion number
---@field joke? string
---@field lang string
---@field message? string
---@field setup? string
---@field timestamp? number
---@field type string

---@class SubmitCreateData
---@field category string
---@field delivery? string
---@field error? boolean
---@field flags table
---@field formatVersion number
---@field joke? string
---@field lang string
---@field message? string
---@field setup? string
---@field timestamp? number
---@field type string

local M = {}

return M
