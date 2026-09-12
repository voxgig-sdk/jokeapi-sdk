import { JokeapiEntityBase } from '../JokeapiEntityBase';
import type { JokeapiSDK } from '../JokeapiSDK';
import type { Control } from '../types';
import type { Submit, SubmitCreateData } from '../JokeapiTypes';
declare class SubmitEntity extends JokeapiEntityBase<Submit> {
    constructor(client: JokeapiSDK, entopts: any);
    make(this: SubmitEntity): SubmitEntity;
    create(this: any, reqdata?: SubmitCreateData, ctrl?: Control): Promise<SubmitEntity>;
}
export { SubmitEntity };
