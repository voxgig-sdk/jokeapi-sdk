<?php
declare(strict_types=1);

// Jokeapi SDK utility: feature_add

class JokeapiFeatureAdd
{
    public static function call(JokeapiContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
