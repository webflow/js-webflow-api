/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { StripeCardBrand } from "./StripeCardBrand";
import { StripeCardExpires } from "./StripeCardExpires";

export const StripeCard: core.serialization.ObjectSchema<serializers.StripeCard.Raw, Webflow.StripeCard> =
    core.serialization.object({
        last4: core.serialization.string().optional(),
        brand: StripeCardBrand.optional(),
        ownerName: core.serialization.string().optional(),
        expires: StripeCardExpires.optional(),
    });

export declare namespace StripeCard {
    interface Raw {
        last4?: string | null;
        brand?: StripeCardBrand.Raw | null;
        ownerName?: string | null;
        expires?: StripeCardExpires.Raw | null;
    }
}
