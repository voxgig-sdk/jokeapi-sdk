import { Context } from './Context';
declare class JokeapiError extends Error {
    isJokeapiError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { JokeapiError };
