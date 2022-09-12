/** @jsx h */
import { h } from 'preact';

import {
  ProductCard,
  ProductCardProps,
} from '../components/ProductCard/ProductCard';

import {
  productGridJetpacksMock,
  productGridAccessoriesMock,
  productGridSuperfoodsMock,
} from '../mock-data/productGrid';

export default {
  title: 'Product Card',
  component: ProductCard,
};

export const ProductCardRolledUp = () => {
  return (
    <ProductCard
      product={productGridJetpacksMock.products[0]}
      vendorLogo={{ src: '', alt: '' }}
      productUrl={productGridJetpacksMock.products[0].productURL}
      image={productGridJetpacksMock.products[0].image}
      isRolledUp={!productGridJetpacksMock.variantBased}
      variant={productGridJetpacksMock.products[0].variants[0]}
      country={productGridJetpacksMock.country}
      displayCountries={productGridJetpacksMock.displayCountries}
      currency={productGridJetpacksMock.currency}
      addToCart={console.log}
    />
  );
};

export const ProductCardVariantBased = () => {
  return (
    <ProductCard
      product={productGridAccessoriesMock.products[0]}
      vendorLogo={{ src: '', alt: '' }}
      productUrl={productGridAccessoriesMock.products[0].variants[0].variantURL}
      image={productGridAccessoriesMock.products[0].image}
      isRolledUp={!productGridAccessoriesMock.variantBased}
      variant={productGridAccessoriesMock.products[0].variants[0]}
      country={productGridAccessoriesMock.country}
      currency={productGridAccessoriesMock.currency}
      addToCart={console.log}
    />
  );
};

export const ProductCardVariantBasedWithSubscription = () => {
  return (
    <ProductCard
      product={productGridSuperfoodsMock.products[0]}
      vendorLogo={{ src: '', alt: '' }}
      productUrl={productGridSuperfoodsMock.products[0].variants[0].variantURL}
      image={productGridSuperfoodsMock.products[0].image}
      isRolledUp={!productGridSuperfoodsMock.variantBased}
      variant={productGridSuperfoodsMock.products[0].variants[0]}
      country={productGridSuperfoodsMock.country}
      displayCountries={productGridJetpacksMock.displayCountries}
      currency={productGridSuperfoodsMock.currency}
      addToCart={console.log}
    />
  );
};
