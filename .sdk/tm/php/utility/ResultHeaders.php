<?php
declare(strict_types=1);

// Jokeapi SDK utility: result_headers

class JokeapiResultHeaders
{
    public static function call(JokeapiContext $ctx): ?JokeapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
