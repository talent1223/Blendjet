/** @jsx h */
import { h } from 'preact';
import { cx } from '../../lib/utils';
import './style.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { ApplicationState } from '../../hooks/useSharedState';
export type ProductGridProps = {
  country: string;
  displayCountries?: string[];
  products: {
    id: string;
    title: string;
    productURL: string;
    metafields: { key: string; value: string }[];
    handle: string;
    vendor: string;
    productType?: string;
    pimSyncSourceProductId: string;
    priceRange: {
      currencyCode: string;
    };
    rating?: number;
    raters?: number;
    type?: string;
    discountPercentage?: number;
    subscriptionMetafields: { key: string; value: string }[];
    image: { src: string; alt: string };
    variants: {
      title: string;
      price: string;
      discountPrice?: string;
      id: string;
      variantURL: string;
      image: { src: string; alt: string };
      sku: string;
    }[];
  }[];
  variantBased: boolean;
  columns: number;
  addToCart: (payload: any) => void;
  currency: ApplicationState['context']['currency'];
};

export function ProductGrid({
  variantBased,
  products,
  columns,
  country,
  displayCountries,
  currency,
  addToCart,
}: ProductGridProps) {
  if (!displayCountries?.length || displayCountries?.includes(country)) {
    return (
      <div
        class={cx(
          'product-grid',
          !products.length && 'product-grid--no-results',
        )}
        style={{ '--columns': columns }}>
        {products.length &&
          products.map((product) => {
            if (variantBased && product.variants.length) {
              return product.variants.map((variant) => {
                return (
                  <ProductCard
                    product={product}
                    vendorLogo={{ src: '', alt: '' }}
                    productUrl={variant.variantURL}
                    image={variant.image}
                    isRolledUp={!variantBased}
                    variant={variant}
                    country={country}
                    displayCountries={displayCountries}
                    currency={currency}
                    addToCart={addToCart}
                  />
                );
              });
            } else {
              return (
                <ProductCard
                  product={product}
                  vendorLogo={{ src: '', alt: '' }}
                  productUrl={product.productURL}
                  image={product.image}
                  isRolledUp={!variantBased}
                  country={country}
                  variant={product.variants[0]}
                  displayCountries={displayCountries}
                  currency={currency}
                  addToCart={addToCart}
                />
              );
            }
          })}
        {!products.length && (
          <div class="product-grid__no-results">
            No products available in your area.
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
}
