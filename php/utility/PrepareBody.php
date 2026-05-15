<?php
declare(strict_types=1);

// Jokeapi SDK utility: prepare_body

class JokeapiPrepareBody
{
    public static function call(JokeapiContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
