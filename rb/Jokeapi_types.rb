# frozen_string_literal: true

# Typed models for the Jokeapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Info entity data model.
#
# @!attribute [rw] error
#   @return [Boolean, nil]
#
# @!attribute [rw] format
#   @return [Array, nil]
#
# @!attribute [rw] joke
#   @return [Hash, nil]
#
# @!attribute [rw] joke_language
#   @return [Array, nil]
#
# @!attribute [rw] system_language
#   @return [Array, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
Info = Struct.new(
  :error,
  :format,
  :joke,
  :joke_language,
  :system_language,
  :version,
  keyword_init: true
)

# Match filter for Info#list (any subset of Info fields).
#
# @!attribute [rw] error
#   @return [Boolean, nil]
#
# @!attribute [rw] format
#   @return [Array, nil]
#
# @!attribute [rw] joke
#   @return [Hash, nil]
#
# @!attribute [rw] joke_language
#   @return [Array, nil]
#
# @!attribute [rw] system_language
#   @return [Array, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
InfoListMatch = Struct.new(
  :error,
  :format,
  :joke,
  :joke_language,
  :system_language,
  :version,
  keyword_init: true
)

# Joke entity data model.
class Joke
end

# Request payload for Joke#load.
#
# @!attribute [rw] id
#   @return [String]
JokeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Submit entity data model.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] delivery
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [Boolean, nil]
#
# @!attribute [rw] flag
#   @return [Hash]
#
# @!attribute [rw] format_version
#   @return [Integer]
#
# @!attribute [rw] joke
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] setup
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [Integer, nil]
#
# @!attribute [rw] type
#   @return [String]
Submit = Struct.new(
  :category,
  :delivery,
  :error,
  :flag,
  :format_version,
  :joke,
  :lang,
  :message,
  :setup,
  :timestamp,
  :type,
  keyword_init: true
)

# Match filter for Submit#create (any subset of Submit fields).
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] delivery
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [Boolean, nil]
#
# @!attribute [rw] flag
#   @return [Hash, nil]
#
# @!attribute [rw] format_version
#   @return [Integer, nil]
#
# @!attribute [rw] joke
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] setup
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [Integer, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
SubmitCreateData = Struct.new(
  :category,
  :delivery,
  :error,
  :flag,
  :format_version,
  :joke,
  :lang,
  :message,
  :setup,
  :timestamp,
  :type,
  keyword_init: true
)

