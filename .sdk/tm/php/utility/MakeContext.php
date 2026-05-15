<?php
declare(strict_types=1);

// Jokeapi SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class JokeapiMakeContext
{
    public static function call(array $ctxmap, ?JokeapiContext $basectx): JokeapiContext
    {
        return new JokeapiContext($ctxmap, $basectx);
    }
}
