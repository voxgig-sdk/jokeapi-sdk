package core

type JokeapiError struct {
	IsJokeapiError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewJokeapiError(code string, msg string, ctx *Context) *JokeapiError {
	return &JokeapiError{
		IsJokeapiError: true,
		Sdk:              "Jokeapi",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *JokeapiError) Error() string {
	return e.Msg
}
