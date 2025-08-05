import { Webflow } from "../../index";

/**
 * @example
 *     {
 *         localeId: "65427cf400e02b306eaa04a0",
 *         body: {
 *             title: "Guide to the Galaxy",
 *             slug: "guide-to-the-galaxy",
 *             seo: {
 *                 title: "The Ultimate Hitchhiker's Guide to the Galaxy",
 *                 description: "Everything you need to know about the galaxy, from avoiding Vogon poetry to the importance of towels."
 *             },
 *             openGraph: {
 *                 title: "Explore the Cosmos with The Ultimate Guide",
 *                 titleCopied: false,
 *                 description: "Dive deep into the mysteries of the universe with your guide to everything galactic.",
 *                 descriptionCopied: false
 *             }
 *         }
 *     }
 */
export interface PageMetadataWriteBody {
    /**
     * Unique identifier for a specific locale. Applicable, when using localization.
     */
    localeId?: string;
    body: {
        /** Title for the page */
        title?: string;
        /** Slug for the page */
        slug?: string;
        /** SEO-related fields for the Page */
        seo?: Webflow.PageMetadataWriteSeo;
        /** Open Graph fields for the Page */
        openGraph?: Webflow.PageMetadataWriteOpenGraph;    
    }
}
