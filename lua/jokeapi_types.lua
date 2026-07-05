-- Typed models for the Jokeapi SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Info
---@field error? boolean
---@field format? table
---@field joke? table
---@field joke_language? table
---@field system_language? table
---@field version? string

---@class InfoListMatch
---@field error? boolean
---@field format? table
---@field joke? table
---@field joke_language? table
---@field system_language? table
---@field version? string

---@class Joke

---@class JokeLoadMatch
---@field id string

---@class Submit
---@field category string
---@field delivery? string
---@field error? boolean
---@field flag table
---@field format_version number
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
---@field flag table
---@field format_version number
---@field joke? string
---@field lang string
---@field message? string
---@field setup? string
---@field timestamp? number
---@field type string

local M = {}

return M
