<?php
declare(strict_types=1);

// Jokeapi SDK exists test

require_once __DIR__ . '/../jokeapi_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = JokeapiSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
