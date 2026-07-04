<?php
declare(strict_types=1);

// Typed models for the Jokeapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Info entity data model. */
class Info
{
    public ?bool $error = null;
    public ?array $format = null;
    public ?array $joke = null;
    public ?array $joke_language = null;
    public ?array $system_language = null;
    public ?string $version = null;
}

/** Match filter for Info#list (any subset of Info fields). */
class InfoListMatch
{
    public ?bool $error = null;
    public ?array $format = null;
    public ?array $joke = null;
    public ?array $joke_language = null;
    public ?array $system_language = null;
    public ?string $version = null;
}

/** Joke entity data model. */
class Joke
{
}

/** Request payload for Joke#load. */
class JokeLoadMatch
{
    public string $id;
}

/** Submit entity data model. */
class Submit
{
    public string $category;
    public ?string $delivery = null;
    public ?bool $error = null;
    public array $flag;
    public int $format_version;
    public ?string $joke = null;
    public string $lang;
    public ?string $message = null;
    public ?string $setup = null;
    public ?int $timestamp = null;
    public string $type;
}

/** Match filter for Submit#create (any subset of Submit fields). */
class SubmitCreateData
{
    public ?string $category = null;
    public ?string $delivery = null;
    public ?bool $error = null;
    public ?array $flag = null;
    public ?int $format_version = null;
    public ?string $joke = null;
    public ?string $lang = null;
    public ?string $message = null;
    public ?string $setup = null;
    public ?int $timestamp = null;
    public ?string $type = null;
}

