import { Assets } from "../api/resources/assets/client/Client";
import { Client as Utilities } from "./AssetsUtilitiesClient";

// Extends the namespace declared in the Fern generated client
declare module "../api/resources/assets/client/Client" {
    export namespace Assets {
        // interface RequestSignatureDetails {
        //     /** The headers of the incoming webhook request as a record-like object */
        //     headers: Record<string, string>;
        //     /** The body of the incoming webhook request as a string */
        //     body: string;
        //     /** The secret key generated when creating the webhook or the OAuth client secret */
        //     secret: string;
        // }
    }
}

export class Client extends Assets {
    constructor(protected readonly _options: Assets.Options) {
        super(_options);
    }

    protected _utilities: Utilities | undefined;

    public get utilities(): Utilities {
        return (this._utilities ??= new Utilities(this._options));
    }
}