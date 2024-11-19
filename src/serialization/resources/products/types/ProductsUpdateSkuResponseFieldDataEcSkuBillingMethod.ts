/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const ProductsUpdateSkuResponseFieldDataEcSkuBillingMethod: core.serialization.Schema<
    serializers.ProductsUpdateSkuResponseFieldDataEcSkuBillingMethod.Raw,
    Webflow.ProductsUpdateSkuResponseFieldDataEcSkuBillingMethod
> = core.serialization.enum_(["one-time", "subscription"]);

export declare namespace ProductsUpdateSkuResponseFieldDataEcSkuBillingMethod {
    type Raw = "one-time" | "subscription";
}
