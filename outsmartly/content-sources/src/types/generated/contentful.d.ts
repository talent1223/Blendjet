// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IArticleFields {
  /** Title */
  title?: string | undefined;

  /** handle */
  handle?: string | undefined;

  /** Blog Handle */
  blogHandle: string;

  /** Publish Date */
  publishDate?: string | undefined;

  /** Youtube Url */
  youtubeUrl?: string | undefined;

  /** Author */
  author?: IAuthor | undefined;

  /** Excerpt */
  excerpt: string;

  /** Blog Meta Title */
  blogMetaTitle?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Featured Media */
  featuredMedia?: Asset | undefined;

  /** Content */
  content?: Document | undefined;

  /** Related Articles */
  relatedArticles?: IArticle[] | undefined;
}

export interface IArticle extends Entry<IArticleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'article';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IAuthorFields {
  /** First Name */
  firstName?: string | undefined;

  /** Last Name */
  lastName?: string | undefined;

  /** Email */
  email?: string | undefined;

  /** Bio */
  bio?: string | undefined;
}

export interface IAuthor extends Entry<IAuthorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'author';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IBioFields {
  /** Name */
  name: string;

  /** Title */
  title: string;

  /** Tag */
  tag?: string | undefined;

  /** Image */
  image: Asset;

  /** Body */
  body: Document;

  /** Favorite BlendJet */
  favoriteBlendJet?: IFavorite | undefined;

  /** Favorite JetPack */
  favoriteJetPack?: IFavorite | undefined;

  /** Favorite Recipe */
  favoriteRecipe: IRecipe;
}

/** Team bio */

export interface IBio extends Entry<IBioFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'bio';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IBlendjetPageFields {
  /** bln-page-title */
  title: string;

  /** bln-page-images */
  blnPageImages?: Asset[] | undefined;

  /** externalImages */
  externalImages?: IExternalMedia[] | undefined;

  /** sectionsCopy */
  sectionsCopy?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** bln-page-videos */
  blnPageVideos?: Asset[] | undefined;

  /** External Mobile Video URL */
  externalMobileVideoUrl?: string | undefined;

  /** External Desktop Video URL */
  externalDesktopVideoUrl?: string | undefined;

  /** metaTitle */
  metaTitle?: string | undefined;

  /** metaDescription */
  metaDescription?: string | undefined;

  /** external Blend Endlessly Video Url */
  externalBlendEndlesslyVideoUrl?: string | undefined;
}

export interface IBlendjetPage extends Entry<IBlendjetPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'blendjetPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IBlogFields {
  /** Title */
  title?: string | undefined;

  /** Handle */
  handle?: string | undefined;

  /** Hero */
  hero?: Asset | undefined;

  /** Articles */
  articles?:
    | (IArticle | IHeroBanner | IProductGrid | ISideBySide | ITestimonials)[]
    | undefined;
}

export interface IBlog extends Entry<IBlogFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'blog';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IBrandAmbassadorFields {
  /** superHeading */
  superHeading?: string | undefined;

  /** Heading */
  heading?: string | undefined;

  /** Hero Banner Content */
  heroBannerContent?: Document | undefined;

  /** Hero Image Desktop */
  heroImageDesktop?: Asset | undefined;

  /** Hero Image Mobile */
  heroImageMobile?: Asset | undefined;

  /** Hero Apply Button Link */
  heroApplyButtonLink?: string | undefined;

  /** Hero Login Button Link */
  heroLoginButtonLink?: string | undefined;

  /** Perks Content */
  perksContent?: Document | undefined;

  /** Image Tile */
  imageTile?: IImageTextSet[] | undefined;

  /** Work Section Title */
  workSectionTitle?: string | undefined;

  /** Work Section Tiles */
  workSectionTiles?: IImageTextSet[] | undefined;

  /** Ambassadors Tile Section Heading */
  ambassadorsTileSectionHeading?: string | undefined;

  /** Ambassadors Tiles */
  ambassadorsTiles?: IImageTextSet[] | undefined;

  /** MetaInfo */
  metaInfo?: IMetaTags | undefined;
}

export interface IBrandAmbassador extends Entry<IBrandAmbassadorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'brandAmbassador';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IBundlesFields {
  /** Bundle Name */
  bundleName: string;

  /** title */
  title?: string | undefined;

  /** subtitle */
  subtitle?: string | undefined;

  /** Bundle Group */
  bundleGroup?: IBundleSet[] | undefined;

  /** Bundle Collection */
  bundleCollection?: IProduct[] | undefined;

  /** bundleCollectionMedia */
  bundleCollectionMedia?: Asset[] | undefined;

  /** Bundle Collection Click Action */
  bundleCollectionClickAction?: 'none' | 'link' | 'variant' | undefined;
}

export interface IBundles extends Entry<IBundlesFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'bundles';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IBundleSetFields {
  /** title */
  title?: string | undefined;

  /** product */
  product?: IProduct | undefined;

  /** variant */
  variant?: IProductVariant | undefined;

  /** Click Action */
  clickAction?: 'variant' | 'link' | 'none' | undefined;

  /** media */
  media?: Asset | undefined;
}

/** Any product + a particular variant (If available) of it to suggest it as a bundle */

export interface IBundleSet extends Entry<IBundleSetFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'bundleSet';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IContentFields {
  /** Title */
  title?: string | undefined;

  /** Handle */
  handle?: string | undefined;

  /** Type */
  type?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Body */
  body?: Document | undefined;

  /** Sections */
  sections?:
    | (
        | IContent
        | IFaq
        | IHeroBanner
        | IProductGrid
        | ISideBySide
        | ITestimonials
      )[]
    | undefined;
}

export interface IContent extends Entry<IContentFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'content';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ICopyBlockFields {
  /** sectionName */
  sectionName: string;

  /** sectionText */
  sectionText?: string | undefined;

  /** sectionRichText */
  sectionRichText?: Document | undefined;
}

export interface ICopyBlock extends Entry<ICopyBlockFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'copyBlock';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IExternalMediaFields {
  /** title */
  title?: string | undefined;

  /** url */
  url?: string | undefined;

  /** Alt Text */
  altText?: string | undefined;
}

/** External Image URL */

export interface IExternalMedia extends Entry<IExternalMediaFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'externalMedia';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IFaqFields {
  /** title */
  title: string;

  /** description */
  description?: Document | undefined;
}

/** FAQ item */

export interface IFaq extends Entry<IFaqFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'faq';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IFaQsPageFields {
  /** title */
  title: string;

  /** FAQ List */
  faqList?: IFaq[] | undefined;

  /** Meta Info */
  metaInfo?: IMetaTags | undefined;
}

export interface IFaQsPage extends Entry<IFaQsPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'faQsPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IFavoriteFields {
  /** Title */
  title: string;

  /** Image */
  image: Asset;

  /** Path */
  path: string;
}

export interface IFavorite extends Entry<IFavoriteFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'favorite';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IFeatureFields {
  /** Title */
  title: string;

  /** Icon */
  icon:
    | 'Globe'
    | 'Lightning'
    | 'Charge'
    | 'Drop'
    | 'Leaf'
    | 'Diamond'
    | 'Mountain'
    | 'Pocket'
    | 'Snowflake'
    | 'Fabric'
    | 'Cafe'
    | 'Dressing'
    | 'Milkshake'
    | 'Protein'
    | 'HappyHour'
    | 'Fruit'
    | 'DairyFree'
    | 'EssentialOils'
    | 'GlutenFree'
    | 'NoArtificialIngredients'
    | 'NonGMO'
    | 'NoPreservatives'
    | 'NoTransFats'
    | 'NutFree'
    | 'Organic'
    | 'Paleo'
    | 'Raw'
    | 'RealFood'
    | 'SoyFree'
    | 'SustainablePackaging'
    | 'Vegan'
    | 'Vegetarian'
    | 'CheckMark'
    | 'NoArtificialSugar'
    | 'Lightning2';

  /** Description */
  description?: Document | undefined;
}

export interface IFeature extends Entry<IFeatureFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'feature';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IFeatureSetFields {
  /** Title */
  title: string;

  /** Description */
  description?: Document | undefined;

  /** Features */
  features?: IFeature[] | undefined;
}

export interface IFeatureSet extends Entry<IFeatureSetFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'featureSet';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHeroBannerFields {
  /** Content Type */
  contentType?:
    | 'ContentHeroBanner'
    | 'ContentSideBySide'
    | 'ContentTestimonials'
    | 'ContentProductGrid'
    | undefined;

  /** Title */
  title?: string | undefined;

  /** handle */
  handle?: string | undefined;

  /** Subtitle */
  subtitle?: string | undefined;

  /** Content */
  content?: Document | undefined;

  /** Description */
  description?: string | undefined;

  /** Excerpt */
  excerpt?: string | undefined;

  /** Featured Media */
  featuredMedia?: Asset | undefined;

  /** Publish Date */
  publishDate?: string | undefined;

  /** Alignment */
  alignment?: 'left' | 'right' | 'center' | undefined;

  /** Size */
  size?: 'medium' | 'large' | 'fullheight' | undefined;

  /** Mobile Full Height */
  mobileFullHeight?: boolean | undefined;

  /** Mobile Background Image */
  mobileBackgroundImage?: Asset | undefined;

  /** Call-to-action Text */
  ctaText?: string | undefined;

  /** Call-to-action Url */
  ctaUrl?: string | undefined;

  /** Text Color */
  textColor?: string | undefined;

  /** Background Alt Tag */
  backgroundAltTag?: string | undefined;
}

export interface IHeroBanner extends Entry<IHeroBannerFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'heroBanner';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHomepageMarketplaceFields {
  /** title */
  title: string;

  /** products */
  products?: IProductItem[] | undefined;

  /** Display Countries */
  displayCountries?: 'US'[] | undefined;
}

/** These products appear on homepage and are US only */

export interface IHomepageMarketplace
  extends Entry<IHomepageMarketplaceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'homepageMarketplace';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IImageTextSetFields {
  /** Title */
  title?: string | undefined;

  /** Text */
  text?: Document | undefined;

  /** Image */
  image?: Asset | undefined;

  /** Layout */
  layout:
    | 'Image Left'
    | 'Image Right'
    | 'Image Background'
    | 'No Image'
    | 'Image Top';

  /** Text Alignment */
  textAlignment: 'Left' | 'Right' | 'Center';
}

export interface IImageTextSet extends Entry<IImageTextSetFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'imageTextSet';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IIngredientFields {
  /** Title */
  title: string;

  /** Handle */
  handle: string;
}

/** Almond Milk, Banana, Strawberries */

export interface IIngredient extends Entry<IIngredientFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'ingredient';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IIngredientSetFields {
  /** Title */
  title?: string | undefined;

  /** Serving */
  serving: string;

  /** Ingredient */
  ingredient: IIngredient;
}

/** 3/4 Cup Almond Milk, 1/2 Frozen Banana */

export interface IIngredientSet extends Entry<IIngredientSetFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'ingredientSet';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ILinkTileFields {
  /** handle */
  handle?: string | undefined;

  /** Title */
  title?: string | undefined;

  /** URL */
  url?: string | undefined;

  /** Featured Image */
  featuredImage?: Asset | undefined;

  /** Background Color */
  backgroundColor?: string | undefined;

  /** Display Countries */
  displayCountries?: 'US'[] | undefined;
}

export interface ILinkTile extends Entry<ILinkTileFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'linkTile';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ILinkTileGridFields {
  /** handle */
  handle?: string | undefined;

  /** title */
  title?: string | undefined;

  /** Description */
  description?: Document | undefined;

  /** Background Color */
  backgroundColor?: string | undefined;

  /** Text Color */
  textColor?: string | undefined;

  /** CTA Label */
  ctaLabel?: string | undefined;

  /** CTA URL */
  ctaUrl?: string | undefined;

  /** CTA Color */
  ctaColor?: 'primary' | 'white' | undefined;

  /** CTA Style */
  ctaStyle?: 'solid' | 'outline' | undefined;

  /** Tiles */
  tiles?: ILinkTile[] | undefined;

  /** Visible Tiles */
  visibleTiles?: number | undefined;

  /** Display Countries */
  displayCountries?: 'US'[] | undefined;
}

export interface ILinkTileGrid extends Entry<ILinkTileGridFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'linkTileGrid';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IMetaTagsFields {
  /** metaTitle */
  metaTitle?: string | undefined;

  /** metaDescription */
  metaDescription?: string | undefined;
}

export interface IMetaTags extends Entry<IMetaTagsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'metaTags';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IOurStoryFields {
  /** Title */
  title: string;

  /** Subhead */
  subhead?: string | undefined;

  /** Hero Image */
  heroImage: Asset;

  /** Mission Text */
  missionText?: Document | undefined;

  /** Mission Hero */
  missionHero?: Asset | undefined;

  /** Pillars Text */
  pillarsText?: Document | undefined;

  /** Pillars */
  pillars?: IImageTextSet[] | undefined;

  /** Journey */
  journey?: IImageTextSet[] | undefined;

  /** Leadership */
  leadership?: IBio[] | undefined;

  /** Meta Info */
  metaInfo?: IMetaTags | undefined;
}

/** Single use */

export interface IOurStory extends Entry<IOurStoryFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'ourStory';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPageFields {
  /** Title */
  title?: string | undefined;

  /** Handle */
  handle: string;

  /** Description */
  description?: string | undefined;

  /** Content */
  content?: string | undefined;

  /** Body */
  body?: Document | undefined;

  /** Sections */
  sections?:
    | (
        | IContent
        | IHeroBanner
        | ILinkTileGrid
        | IProductGrid
        | IScrollingMarquee
        | ISideBySide
        | ISubNavMenu
        | ITestimonials
        | ITextRibbon
      )[]
    | undefined;

  /** Meta Info */
  metaInfo?: IMetaTags | undefined;
}

/** Pages and page content for your Nacelle site */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'page';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IProductFields {
  /** Title */
  title: string;

  /** Handle */
  handle: string;

  /** Variants */
  variants?: IProductVariant[] | undefined;

  /** Header Text */
  headerText?: Document | undefined;

  /** Header Background Color */
  headerBackground?: string | undefined;

  /** Product Media */
  productDescription?:
    | (IPage | IProduct | IProductDescriptionSection)[]
    | undefined;

  /** Product Announcement */
  productAnnouncement?: Document | undefined;

  /** Meta Title */
  metaTitle?: string | undefined;

  /** Meta Description */
  metaDescription?: string | undefined;

  /** Meta Image (External URL) */
  metaImage?: string | undefined;

  /** Features */
  features?: IFeatureSet | undefined;

  /** Features Background Color */
  featuresBackgroundColor?: string | undefined;

  /** Bundles */
  bundles?: IBundles | undefined;

  /** Quantity Option */
  quantityOption?: IQuantitySet | undefined;

  /** Shipping Offset */
  shippingOffset?: number | undefined;

  /** Shipping Date */
  shippingDate?: string | undefined;
}

export interface IProduct extends Entry<IProductFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'product';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IProductDescriptionSectionFields {
  /** Title */
  heading: string;

  /** Text */
  text: Document;

  /** Media */
  video?: Asset | undefined;

  /** External Video URL */
  externalVideoUrl?: string | undefined;
}

/** Image/Video text sets */

export interface IProductDescriptionSection
  extends Entry<IProductDescriptionSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'productDescriptionSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IProductGridFields {
  /** Title */
  title?: string | undefined;

  /** Handle */
  handle?: string | undefined;

  /** Shopify Collection Handle */
  shopifyCollectionHandle: string;

  /** Show all variants? */
  variantBased?: boolean | undefined;

  /** Columns */
  columns?: number | undefined;

  /** Display Countries */
  displayCountries?: 'US'[] | undefined;
}

export interface IProductGrid extends Entry<IProductGridFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'productGrid';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IProductItemFields {
  /** title */
  title?: string | undefined;

  /** product */
  product: IProduct;

  /** variant */
  variant?: IProductVariant | undefined;

  /** Gradiant Color 1 */
  gradiantColor1?: string | undefined;

  /** Gradiant Color 2 */
  gradiantColor2?: string | undefined;
}

export interface IProductItem extends Entry<IProductItemFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'productItem';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IProductReferenceFields {
  /** Title */
  title?: string | undefined;

  /** Subtitle */
  subtitle?: string | undefined;

  /** Shopify Product Handle */
  shopifyProductHandle?: string | undefined;

  /** With Variety Pack */
  withVarietyPack?: boolean | undefined;

  /** Product */
  product?: IProduct | undefined;

  /** Has Multiple Products? */
  hasMultipleProducts?: boolean | undefined;

  /** Additional Products */
  additionalProducts?: IProduct[] | undefined;

  /** Additional Products Selector Label */
  selectorLabel?: string | undefined;

  /** Additional Products Tab Selector */
  additionalProductsTabSelector?: boolean | undefined;
}

export interface IProductReference extends Entry<IProductReferenceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'productReference';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IProductTest2Fields {
  /** Title */
  title: string;

  /** Handle */
  handle: string;

  /** Variants */
  variants?: (IProductVariant | IProductVariantDuplicate)[] | undefined;

  /** Header Text */
  headerText?: Document | undefined;

  /** Header Background Color */
  headerBackground?: string | undefined;

  /** Product Media */
  productDescription?:
    | (IPage | IProduct | IProductDescriptionSection)[]
    | undefined;

  /** Product Announcement */
  productAnnouncement?: Document | undefined;

  /** Meta Title */
  metaTitle?: string | undefined;

  /** Meta Description */
  metaDescription?: string | undefined;

  /** Features */
  features?: IFeatureSet | undefined;

  /** Features Background Color */
  featuresBackgroundColor?: string | undefined;
}

/** Playground for figuring out variant images/descriptions. */

export interface IProductTest2 extends Entry<IProductTest2Fields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'productTest2';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IProductVariantFields {
  /** Title */
  title?: string | undefined;

  /** productImage */
  productImage?: Asset | undefined;

  /** heroImages */
  heroImages?: Asset[] | undefined;

  /** description */
  description?: string | undefined;

  /** Header Text */
  headerText?: Document | undefined;

  /** Product Media */
  productDescription?:
    | (IPage | IProduct | IProductDescriptionSection)[]
    | undefined;

  /** Nutrition Facts Tile */
  nutritionFactsTile?: IProductDescriptionSection | undefined;

  /** Quantity Option */
  quantityOption?: IQuantitySet | undefined;

  /** Bundles */
  bundles?: IBundles | undefined;

  /** Special Edition */
  specialEdition?: 'Lisa Frank' | undefined;

  /** Shipping Offset */
  shippingOffset?: number | undefined;

  /** Shipping Date */
  shippingDate?: string | undefined;
}

export interface IProductVariant extends Entry<IProductVariantFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'productVariant';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IProductVariantDuplicateFields {
  /** Title */
  title?: string | undefined;

  /** productImage */
  productImage?: Asset | undefined;

  /** heroImages */
  heroImages?: Asset[] | undefined;

  /** descriptionheader */
  descriptionheader?: Document | undefined;
}

/** duplicate product variant */

export interface IProductVariantDuplicate
  extends Entry<IProductVariantDuplicateFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'productVariantDuplicate';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IQuantitySetFields {
  /** Name */
  name: string;

  /** title */
  title?: string | undefined;

  /** quantity */
  quantity?: '1,2,3' | '1,3,5' | '6,12,30' | undefined;
}

/** Quantity Set */

export interface IQuantitySet extends Entry<IQuantitySetFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'quantitySet';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IQueueFields {
  /** Title */
  title: string;

  /** Handle */
  handle: string;

  /** Items */
  items: (
    | IArticle
    | IBlog
    | IBundles
    | IProductReference
    | IRecipe
    | IRecipeCategory
  )[];
}

/** For creating queues, lists, and menus of entries */

export interface IQueue extends Entry<IQueueFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'queue';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IRecipeFields {
  /** Title */
  title?: string | undefined;

  /** Handle */
  handle: string;

  /** Teaser Image */
  teaserImage: Asset;

  /** Teaser Text */
  teaserText: string;

  /** Category */
  category?: IRecipeCategory | undefined;

  /** Hero */
  hero?: Asset | undefined;

  /** Hero YouTube */
  heroYouTube?: string | undefined;

  /** Description */
  description: string;

  /** Media */
  media?: Asset[] | undefined;

  /** Instructions */
  instructions: string[];

  /** Ingredients */
  ingredients: IIngredientSet[];

  /** Nutrition Facts */
  nutritionFacts?: Document | undefined;

  /** Published Date */
  publishedDate?: string | undefined;

  /** Comments */
  comments?: Record<string, any> | undefined;

  /** Meta Info */
  metaInfo?: IMetaTags | undefined;

  /** Join Now Facebook Text */
  metaFacebookText?: Document | undefined;

  /** Serving Size */
  servingSize?: string | undefined;

  /** Calories */
  calories?: string | undefined;

  /** Fat Content */
  fatContent?: string | undefined;
}

export interface IRecipe extends Entry<IRecipeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'recipe';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IRecipeCategoryFields {
  /** Title */
  title: string;

  /** Handle */
  handle: string;

  /** Hero */
  hero: Asset;
}

export interface IRecipeCategory extends Entry<IRecipeCategoryFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'recipeCategory';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IScrollingMarqueeFields {
  /** handle */
  handle: string;

  /** Title */
  title?: string | undefined;

  /** Background */
  background?: string | undefined;

  /** Images */
  images?: Asset[] | undefined;

  /** Repeating Text */
  repeatingText?: string | undefined;

  /** Text Color */
  textColor?: string | undefined;

  /** Reversed */
  reversed?: boolean | undefined;

  /** Display Countries */
  displayCountries?: 'US'[] | undefined;
}

export interface IScrollingMarquee extends Entry<IScrollingMarqueeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'scrollingMarquee';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISideBySideFields {
  /** Content Type */
  contentType?:
    | 'ContentHeroBanner'
    | 'ContentSideBySide'
    | 'ContentTestimonials'
    | 'ContentProductGrid'
    | undefined;

  /** Title */
  title?: string | undefined;

  /** handle */
  handle?: string | undefined;

  /** Content */
  content?: Document | undefined;

  /** Featured Media */
  featuredMedia?: Asset | undefined;

  /** Publish Date */
  publishDate?: string | undefined;

  /** Background Color */
  backgroundColor?: string | undefined;

  /** Call-to-action Text */
  ctaText?: string | undefined;

  /** Call-to-action Url */
  ctaUrl?: string | undefined;

  /** Reverse Desktop */
  reverseDesktop?: boolean | undefined;

  /** Reverse Mobile */
  reverseMobile?: boolean | undefined;
}

export interface ISideBySide extends Entry<ISideBySideFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sideBySide';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISitemapFields {
  /** Sitemap Title */
  sitemapTitle?: string | undefined;

  /** Sitemap Content */
  sitemapContent?: Document | undefined;

  /** MetaInfo */
  metaInfo?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

export interface ISitemap extends Entry<ISitemapFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sitemap';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISubNavMenuFields {
  /** handle */
  handle: string;

  /** Text Color */
  textColor?: string | undefined;

  /** Background Color */
  backgroundColor?: string | undefined;

  /** Nacelle Link List Handle */
  nacelleLinkListHandle?: string | undefined;

  /** Display Countries */
  displayCountries?: 'US'[] | undefined;
}

export interface ISubNavMenu extends Entry<ISubNavMenuFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'subNavMenu';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ITestimonialFields {
  /** Name */
  name?: string | undefined;

  /** Quotation */
  quotation?: string | undefined;

  /** Featured Media */
  featuredMedia?: Asset | undefined;
}

export interface ITestimonial extends Entry<ITestimonialFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'testimonial';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ITestimonialsFields {
  /** Content Type */
  contentType?:
    | 'ContentHeroBanner'
    | 'ContentSideBySide'
    | 'ContentTestimonials'
    | 'ContentProductGrid'
    | undefined;

  /** Title */
  title?: string | undefined;

  /** handle */
  handle?: string | undefined;

  /** Content */
  content?: Document | undefined;

  /** Description */
  description?: string | undefined;

  /** Excerpt */
  excerpt?: string | undefined;

  /** Featured Media */
  featuredMedia?: Asset | undefined;

  /** Publish Date */
  publishDate?: string | undefined;

  /** Blog Handle */
  blogHandle?: string | undefined;

  /** Author */
  author?: IAuthor | undefined;

  /** Slides per view */
  slidesPerView?: number | undefined;

  /** Alignment */
  alignment?: 'left' | 'right' | 'centered' | undefined;

  /** Slides */
  slides?: ITestimonial[] | undefined;
}

export interface ITestimonials extends Entry<ITestimonialsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'testimonials';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ITextRibbonFields {
  /** handle */
  handle?: string | undefined;

  /** Title */
  title: string;

  /** Anchor */
  anchor: string;

  /** Description */
  description: Document;

  /** Text Color */
  textColor: string;

  /** Content Max Width */
  contentMaxWidth?: number | undefined;

  /** Text Align */
  textAlign: 'left' | 'center' | 'right';

  /** Background Color */
  backgroundColor?: string | undefined;

  /** Left Background Image */
  leftBackgroundImage?: Asset | undefined;

  /** Right Background Image */
  rightBackgroundImage?: Asset | undefined;

  /** height */
  height?: number | undefined;

  /** Display Countries */
  displayCountries?: 'US'[] | undefined;
}

export interface ITextRibbon extends Entry<ITextRibbonFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'textRibbon';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IUserGuideFields {
  /** Title */
  title: string;

  /** Handle */
  handle: string;

  /** Description */
  description?: string | undefined;

  /** Hero Image */
  heroImage?: Asset | undefined;

  /** Components Desktop */
  componentsDesktop?: Asset | undefined;

  /** Components Mobile */
  componentsMobile?: Asset | undefined;

  /** User Guide Sections */
  userGuideSections: IUserGuideSection[];

  /** Do List */
  doList?: Document | undefined;

  /** Do Not List */
  doNotList?: Document | undefined;

  /** Alert */
  alert?: string | undefined;

  /** Meta Info */
  metaInfo?: IMetaTags | undefined;
}

/** User guide page */

export interface IUserGuide extends Entry<IUserGuideFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'userGuide';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IUserGuideCardFields {
  /** Title */
  title: string;

  /** Type */
  type?:
    | 'Blue'
    | 'Blue Flashing'
    | 'Purple'
    | 'Red'
    | 'Red Flashing'
    | undefined;

  /** Media */
  media?: Asset | undefined;

  /** Body */
  body: Document;

  /** External Video URL */
  externalVideoUrl?: string | undefined;
}

export interface IUserGuideCard extends Entry<IUserGuideCardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'userGuideCard';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IUserGuideSectionFields {
  /** Title */
  title: string;

  /** Body */
  body?: Document | undefined;

  /** Cards */
  cards?: IUserGuideCard[] | undefined;

  /** Media */
  media?: Asset | undefined;

  /** External Video URL */
  externalVideoUrl?: string | undefined;
}

export interface IUserGuideSection extends Entry<IUserGuideSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'userGuideSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE =
  | 'article'
  | 'author'
  | 'bio'
  | 'blendjetPage'
  | 'blog'
  | 'brandAmbassador'
  | 'bundles'
  | 'bundleSet'
  | 'content'
  | 'copyBlock'
  | 'externalMedia'
  | 'faq'
  | 'faQsPage'
  | 'favorite'
  | 'feature'
  | 'featureSet'
  | 'heroBanner'
  | 'homepageMarketplace'
  | 'imageTextSet'
  | 'ingredient'
  | 'ingredientSet'
  | 'linkTile'
  | 'linkTileGrid'
  | 'metaTags'
  | 'ourStory'
  | 'page'
  | 'product'
  | 'productDescriptionSection'
  | 'productGrid'
  | 'productItem'
  | 'productReference'
  | 'productTest2'
  | 'productVariant'
  | 'productVariantDuplicate'
  | 'quantitySet'
  | 'queue'
  | 'recipe'
  | 'recipeCategory'
  | 'scrollingMarquee'
  | 'sideBySide'
  | 'sitemap'
  | 'subNavMenu'
  | 'testimonial'
  | 'testimonials'
  | 'textRibbon'
  | 'userGuide'
  | 'userGuideCard'
  | 'userGuideSection';

export type LOCALE_CODE = 'en-US' | 'es';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
