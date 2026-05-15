<?php
declare(strict_types=1);

// Jokeapi SDK base feature

class JokeapiBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(JokeapiContext $ctx, array $options): void {}
    public function PostConstruct(JokeapiContext $ctx): void {}
    public function PostConstructEntity(JokeapiContext $ctx): void {}
    public function SetData(JokeapiContext $ctx): void {}
    public function GetData(JokeapiContext $ctx): void {}
    public function GetMatch(JokeapiContext $ctx): void {}
    public function SetMatch(JokeapiContext $ctx): void {}
    public function PrePoint(JokeapiContext $ctx): void {}
    public function PreSpec(JokeapiContext $ctx): void {}
    public function PreRequest(JokeapiContext $ctx): void {}
    public function PreResponse(JokeapiContext $ctx): void {}
    public function PreResult(JokeapiContext $ctx): void {}
    public function PreDone(JokeapiContext $ctx): void {}
    public function PreUnexpected(JokeapiContext $ctx): void {}
}
