# Jokeapi SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

JokeapiUtility.registrar = ->(u) {
  u.clean = JokeapiUtilities::Clean
  u.done = JokeapiUtilities::Done
  u.make_error = JokeapiUtilities::MakeError
  u.feature_add = JokeapiUtilities::FeatureAdd
  u.feature_hook = JokeapiUtilities::FeatureHook
  u.feature_init = JokeapiUtilities::FeatureInit
  u.fetcher = JokeapiUtilities::Fetcher
  u.make_fetch_def = JokeapiUtilities::MakeFetchDef
  u.make_context = JokeapiUtilities::MakeContext
  u.make_options = JokeapiUtilities::MakeOptions
  u.make_request = JokeapiUtilities::MakeRequest
  u.make_response = JokeapiUtilities::MakeResponse
  u.make_result = JokeapiUtilities::MakeResult
  u.make_point = JokeapiUtilities::MakePoint
  u.make_spec = JokeapiUtilities::MakeSpec
  u.make_url = JokeapiUtilities::MakeUrl
  u.param = JokeapiUtilities::Param
  u.prepare_auth = JokeapiUtilities::PrepareAuth
  u.prepare_body = JokeapiUtilities::PrepareBody
  u.prepare_headers = JokeapiUtilities::PrepareHeaders
  u.prepare_method = JokeapiUtilities::PrepareMethod
  u.prepare_params = JokeapiUtilities::PrepareParams
  u.prepare_path = JokeapiUtilities::PreparePath
  u.prepare_query = JokeapiUtilities::PrepareQuery
  u.result_basic = JokeapiUtilities::ResultBasic
  u.result_body = JokeapiUtilities::ResultBody
  u.result_headers = JokeapiUtilities::ResultHeaders
  u.transform_request = JokeapiUtilities::TransformRequest
  u.transform_response = JokeapiUtilities::TransformResponse
}
