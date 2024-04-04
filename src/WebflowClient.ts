
import { WebflowClient } from "./Client";
import { Client as Collections } from "./api/resources/collections/client/CollectionsClient";

// Client adapts the base client to permit extra properties in
// the client.Collections.Items.createItem request.
export class Client extends WebflowClient {
    constructor(protected readonly _options: WebflowClient.Options) {
        super(_options);
    }

    protected _collections: Collections | undefined;

    public get collections(): Collections {
        return (this._collections ??= new Collections(this._options));
    }
}