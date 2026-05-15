<?php
declare(strict_types=1);

// Jokeapi SDK utility: result_body

class JokeapiResultBody
{
    public static function call(JokeapiContext $ctx): ?JokeapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
