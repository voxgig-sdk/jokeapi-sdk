import { JokeapiEntityBase } from '../JokeapiEntityBase';
import type { JokeapiSDK } from '../JokeapiSDK';
import type { Control } from '../types';
import type { Info, InfoListMatch } from '../JokeapiTypes';
declare class InfoEntity extends JokeapiEntityBase<Info> {
    constructor(client: JokeapiSDK, entopts: any);
    make(this: InfoEntity): InfoEntity;
    list(this: any, reqmatch?: InfoListMatch, ctrl?: Control): Promise<InfoEntity[]>;
}
export { InfoEntity };
