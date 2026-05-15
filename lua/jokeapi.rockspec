package = "voxgig-sdk-jokeapi"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/jokeapi-sdk.git"
}
description = {
  summary = "Jokeapi SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["jokeapi_sdk"] = "jokeapi_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
