/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../../index";

/**
 * @example
 *     {
 *         locale: "locale",
 *         nodes: [{
 *                 nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad623",
 *                 text: "<h1>The Hitchhiker's Guide to the Galaxy</h1>"
 *             }, {
 *                 nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad627",
 *                 text: "<div><h3>Don't Panic!</h3><p>Always know where your towel is.</p></div>"
 *             }, {
 *                 nodeId: "a245c12d-995b-55ee-5ec7-aa36a6cad629",
 *                 text: "<img alt='Marvin, the Paranoid Android' src='path/to/image/with/assetId/659595234426a9fcbad57043'/>"
 *             }]
 *     }
 */
export interface DomWrite {
    /**
     * The locale identifier.
     */
    locale: string;
    nodes: Webflow.DomWriteNodesItem[];
}
