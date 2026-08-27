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
# @!attribute [rw] formats
#   @return [Array, nil]
#
# @!attribute [rw] jokeLanguages
#   @return [Array, nil]
#
# @!attribute [rw] jokes
#   @return [Hash, nil]
#
# @!attribute [rw] systemLanguages
#   @return [Array, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
Info = Struct.new(
  :error,
  :formats,
  :jokeLanguages,
  :jokes,
  :systemLanguages,
  :version,
  keyword_init: true
)

# Request payload for Info#list.
#
# @!attribute [rw] error
#   @return [Boolean, nil]
#
# @!attribute [rw] formats
#   @return [Array, nil]
#
# @!attribute [rw] jokeLanguages
#   @return [Array, nil]
#
# @!attribute [rw] jokes
#   @return [Hash, nil]
#
# @!attribute [rw] systemLanguages
#   @return [Array, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
InfoListMatch = Struct.new(
  :error,
  :formats,
  :jokeLanguages,
  :jokes,
  :systemLanguages,
  :version,
  keyword_init: true
)

# Joke entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Joke = Struct.new(
  :id,
  keyword_init: true
)

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
# @!attribute [rw] flags
#   @return [Hash]
#
# @!attribute [rw] formatVersion
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
  :flags,
  :formatVersion,
  :joke,
  :lang,
  :message,
  :setup,
  :timestamp,
  :type,
  keyword_init: true
)

# Request payload for Submit#create.
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
# @!attribute [rw] flags
#   @return [Hash]
#
# @!attribute [rw] formatVersion
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
SubmitCreateData = Struct.new(
  :category,
  :delivery,
  :error,
  :flags,
  :formatVersion,
  :joke,
  :lang,
  :message,
  :setup,
  :timestamp,
  :type,
  keyword_init: true
)

