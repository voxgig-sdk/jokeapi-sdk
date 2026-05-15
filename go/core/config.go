package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Jokeapi",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://v2.jokeapi.dev",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"info": map[string]any{},
				"joke": map[string]any{},
				"submit": map[string]any{},
			},
		},
		"entity": map[string]any{
			"info": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "error",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "format",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "joke",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "joke_language",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "system_language",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "version",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "info",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/info",
								"parts": []any{
									"info",
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"lang",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"joke": map[string]any{
				"fields": []any{},
				"name": "joke",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "category",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": "nsfw,racist,sexist",
											"kind": "query",
											"name": "blacklist_flag",
											"orig": "blacklist_flag",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "C%23",
											"kind": "query",
											"name": "contain",
											"orig": "contain",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "0-55",
											"kind": "query",
											"name": "id_range",
											"orig": "id_range",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "safe_mode",
											"orig": "safe_mode",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/joke/{category}",
								"parts": []any{
									"joke",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"amount",
										"blacklist_flag",
										"contain",
										"format",
										"id",
										"id_range",
										"lang",
										"safe_mode",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"submit": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "delivery",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "error",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "flag",
						"req": true,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "format_version",
						"req": true,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "joke",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "lang",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "message",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "setup",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "timestamp",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "type",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 10,
					},
				},
				"name": "submit",
				"op": map[string]any{
					"create": map[string]any{
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "dry_run",
											"orig": "dry_run",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "POST",
								"orig": "/submit",
								"parts": []any{
									"submit",
								},
								"select": map[string]any{
									"exist": []any{
										"dry_run",
										"format",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
