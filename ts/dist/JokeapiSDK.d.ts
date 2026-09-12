import { InfoEntity } from './entity/InfoEntity';
import { JokeEntity } from './entity/JokeEntity';
import { SubmitEntity } from './entity/SubmitEntity';
export type * from './JokeapiTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { JokeapiEntityBase } from './JokeapiEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class JokeapiSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Info(entopts?: Record<string, any>): InfoEntity;
    Joke(entopts?: Record<string, any>): JokeEntity;
    Submit(entopts?: Record<string, any>): SubmitEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): JokeapiSDK;
    tester(testopts?: any, sdkopts?: any): JokeapiSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof JokeapiSDK;
export { stdutil, config, BaseFeature, JokeapiEntityBase, JokeapiSDK, SDK, };
