<?php
declare(strict_types=1);

// Jokeapi SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class JokeapiFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new JokeapiBaseFeature();
            case "test":
                return new JokeapiTestFeature();
            default:
                return new JokeapiBaseFeature();
        }
    }
}
