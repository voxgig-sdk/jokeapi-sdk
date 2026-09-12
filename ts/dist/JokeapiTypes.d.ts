export interface Info {
    error?: boolean;
    formats?: any[];
    jokeLanguages?: any[];
    jokes?: Record<string, any>;
    systemLanguages?: any[];
    version?: string;
}
export interface InfoListMatch {
    format?: string;
    lang?: string;
}
export interface Joke {
    id?: string;
}
export interface JokeLoadMatch {
    id: string;
    amount?: number;
    blacklist_flag?: string;
    contain?: string;
    format?: string;
    id_range?: string;
    lang?: string;
    safe_mode?: boolean;
    type?: string;
}
export interface Submit {
    category: string;
    delivery?: string;
    error?: boolean;
    flags: Record<string, any>;
    formatVersion: number;
    joke?: string;
    lang: string;
    message?: string;
    setup?: string;
    timestamp?: number;
    type: string;
}
export interface SubmitCreateData {
    dry_run?: boolean;
    format?: string;
    category: string;
    delivery?: string;
    error?: boolean;
    flags: Record<string, any>;
    formatVersion: number;
    joke?: string;
    lang: string;
    message?: string;
    setup?: string;
    timestamp?: number;
    type: string;
}
