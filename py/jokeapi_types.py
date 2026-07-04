# Typed models for the Jokeapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Info:
    error: Optional[bool] = None
    format: Optional[list] = None
    joke: Optional[dict] = None
    joke_language: Optional[list] = None
    system_language: Optional[list] = None
    version: Optional[str] = None


@dataclass
class InfoListMatch:
    error: Optional[bool] = None
    format: Optional[list] = None
    joke: Optional[dict] = None
    joke_language: Optional[list] = None
    system_language: Optional[list] = None
    version: Optional[str] = None


@dataclass
class Joke:
    pass


@dataclass
class JokeLoadMatch:
    id: str


@dataclass
class Submit:
    category: str
    flag: dict
    format_version: int
    lang: str
    type: str
    delivery: Optional[str] = None
    error: Optional[bool] = None
    joke: Optional[str] = None
    message: Optional[str] = None
    setup: Optional[str] = None
    timestamp: Optional[int] = None


@dataclass
class SubmitCreateData:
    category: Optional[str] = None
    delivery: Optional[str] = None
    error: Optional[bool] = None
    flag: Optional[dict] = None
    format_version: Optional[int] = None
    joke: Optional[str] = None
    lang: Optional[str] = None
    message: Optional[str] = None
    setup: Optional[str] = None
    timestamp: Optional[int] = None
    type: Optional[str] = None

