<?php
declare(strict_types=1);

// Jokeapi SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

JokeapiUtility::setRegistrar(function (JokeapiUtility $u): void {
    $u->clean = [JokeapiClean::class, 'call'];
    $u->done = [JokeapiDone::class, 'call'];
    $u->make_error = [JokeapiMakeError::class, 'call'];
    $u->feature_add = [JokeapiFeatureAdd::class, 'call'];
    $u->feature_hook = [JokeapiFeatureHook::class, 'call'];
    $u->feature_init = [JokeapiFeatureInit::class, 'call'];
    $u->fetcher = [JokeapiFetcher::class, 'call'];
    $u->make_fetch_def = [JokeapiMakeFetchDef::class, 'call'];
    $u->make_context = [JokeapiMakeContext::class, 'call'];
    $u->make_options = [JokeapiMakeOptions::class, 'call'];
    $u->make_request = [JokeapiMakeRequest::class, 'call'];
    $u->make_response = [JokeapiMakeResponse::class, 'call'];
    $u->make_result = [JokeapiMakeResult::class, 'call'];
    $u->make_point = [JokeapiMakePoint::class, 'call'];
    $u->make_spec = [JokeapiMakeSpec::class, 'call'];
    $u->make_url = [JokeapiMakeUrl::class, 'call'];
    $u->param = [JokeapiParam::class, 'call'];
    $u->prepare_auth = [JokeapiPrepareAuth::class, 'call'];
    $u->prepare_body = [JokeapiPrepareBody::class, 'call'];
    $u->prepare_headers = [JokeapiPrepareHeaders::class, 'call'];
    $u->prepare_method = [JokeapiPrepareMethod::class, 'call'];
    $u->prepare_params = [JokeapiPrepareParams::class, 'call'];
    $u->prepare_path = [JokeapiPreparePath::class, 'call'];
    $u->prepare_query = [JokeapiPrepareQuery::class, 'call'];
    $u->result_basic = [JokeapiResultBasic::class, 'call'];
    $u->result_body = [JokeapiResultBody::class, 'call'];
    $u->result_headers = [JokeapiResultHeaders::class, 'call'];
    $u->transform_request = [JokeapiTransformRequest::class, 'call'];
    $u->transform_response = [JokeapiTransformResponse::class, 'call'];
});
