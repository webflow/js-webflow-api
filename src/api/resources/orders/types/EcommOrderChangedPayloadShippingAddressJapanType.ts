/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Represents a Japan-only address format. This field will only appear on orders placed from Japan.
 */
export type EcommOrderChangedPayloadShippingAddressJapanType = "kana" | "kanji";

export const EcommOrderChangedPayloadShippingAddressJapanType = {
    Kana: "kana",
    Kanji: "kanji",
} as const;
