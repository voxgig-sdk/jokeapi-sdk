# Typed models for the Jokeapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Info(TypedDict, total=False):
    error: bool
    formats: list
    jokeLanguages: list
    jokes: dict
    systemLanguages: list
    version: str


class InfoListMatch(TypedDict, total=False):
    format: str
    lang: str


class Joke(TypedDict, total=False):
    id: str


class JokeLoadMatchRequired(TypedDict):
    id: str


class JokeLoadMatch(JokeLoadMatchRequired, total=False):
    amount: int
    blacklist_flag: str
    contain: str
    format: str
    id_range: str
    lang: str
    safe_mode: bool
    type: str


class SubmitRequired(TypedDict):
    category: str
    flags: dict
    formatVersion: int
    lang: str
    type: str


class Submit(SubmitRequired, total=False):
    delivery: str
    error: bool
    joke: str
    message: str
    setup: str
    timestamp: int


class SubmitCreateDataRequired(TypedDict):
    category: str
    flags: dict
    formatVersion: int
    lang: str
    type: str


class SubmitCreateData(SubmitCreateDataRequired, total=False):
    dry_run: bool
    format: str
    delivery: str
    error: bool
    joke: str
    message: str
    setup: str
    timestamp: int
