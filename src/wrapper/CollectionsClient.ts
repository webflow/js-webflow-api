import { Collections } from "../api/resources/collections/client/Client";
import { Client as Items } from "./ItemsClient";

// Client adapts the base client to permit extra properties in
// the client.Collections.Items.createItem request.
export class Client extends Collections {
    constructor(protected readonly _options: Collections.Options) {
        super(_options);
    }

    protected _items: Items | undefined;

    public get items(): Items {
        return (this._items ??= new Items(this._options));
    }
}
