import { JokeapiEntityBase } from '../JokeapiEntityBase';
import type { JokeapiSDK } from '../JokeapiSDK';
import type { Control } from '../types';
import type { Joke, JokeLoadMatch } from '../JokeapiTypes';
declare class JokeEntity extends JokeapiEntityBase<Joke> {
    constructor(client: JokeapiSDK, entopts: any);
    make(this: JokeEntity): JokeEntity;
    load(this: any, reqmatch?: JokeLoadMatch, ctrl?: Control): Promise<JokeEntity>;
}
export { JokeEntity };
