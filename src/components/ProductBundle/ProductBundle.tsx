/** @jsx h */
import { h, createRef } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { BundleVariantSelector } from './BundleVariantSelector';
import { VarietyPackSelector } from './VarietyPackSelector';
import { Image } from '../../types/image';
import './style.scss';

export interface BundleProductVariant {
  id: string;
  title: string;
  sku: string;
  priceCurrency: string;
  price: string;
  image: Image;
  colorId: string;
}

export interface BundleProduct {
  id: string;
  pimSyncSourceProductId: string;
  title: string;
  vendor: string;
  metafields: { key: string; value: string }[];
  handle: string;
  variants: BundleProductVariant[];
  video: {
    src: string;
  };
}

export interface VarietyPackVariant {
  id: string;
  title: string;
  sku: string;
  priceCurrency: string;
  price: string;
  image: Image;
}

export interface VarietyPack {
  id: string;
  pimSyncSourceProductId: string;
  title: string;
  vendor: string;
  metafields: { key: string; value: string }[];
  handle: string;
  name: string;
  variants: VarietyPackVariant[];
  video: {
    src: string;
  };
}

export interface ProductBundleProps {
  bundlePrice: string;
  bundleProducts: BundleProduct[];
  bundleTitle?: string;
  currentVariant: {
    image: Image;
  };
  varietyPacks: VarietyPack[];
  addBundleToCart: (variant: any) => void;
}

export function ProductBundle({
  bundlePrice,
  bundleProducts,
  bundleTitle,
  currentVariant,
  varietyPacks,
  addBundleToCart,
}: ProductBundleProps) {
  // Defines which bundle product is clicked on to open its modal
  const [selectedBundleProduct, setSelectedBundleProduct] =
    useState<BundleProduct | null>(null);

  // Defines the variant of each bundle product that is shown on the PDP,
  // defaults to all first variants
  const [currentBundleVariants, setCurrentBundleVariants] = useState<
    BundleProductVariant[]
  >(bundleProducts.map((product) => product.variants[0]));

  // Change the variant of one of the bundle products
  function setBundleVariant(
    bundleIndex: number,
    variant: BundleProductVariant,
  ) {
    const nextBundleVariants = currentBundleVariants;
    nextBundleVariants.splice(bundleIndex, 1, variant);
    setCurrentBundleVariants(nextBundleVariants);
  }

  // Defines whether the variety pack is clicked and its modal should open
  const [varietyPacksIsSelected, setVarietyPacksIsSelected] =
    useState<boolean>(false);

  // Defines current variety pack (can be switched in the modal)
  const [currentVarietyPack, setCurrentVarietyPack] =
    useState<VarietyPack | null>(varietyPacks.length ? varietyPacks[0] : null);

  // Defines image index of the variety pack variant images
  const [varietyPackImageCounter, setVarietyPackImageCounter] =
    useState<number>(0);

  const addToCartRef = createRef();
  function scrollToModal(scrollOffset = 595) {
    const containerOffset =
      addToCartRef.current.getBoundingClientRect().top || 0;

    window.scroll({
      top: window.scrollY + containerOffset - scrollOffset,
      behavior: 'smooth',
    });
  }

  // We cycle through all variety pack images using the same counter
  // for efficiency. We cycle this counter to ensure it doesn't get
  // arbitrarily large. To make sure no images are skipped in the
  // cycles we need a maxCounter that is divisible by all cycle
  // lengths.
  const maxCounter = varietyPacks
    .map((varietyPack) => varietyPack.variants.length)
    .filter((v, i, a) => a.indexOf(v) === i) // Get unique values
    .reduce((a, b) => a * b, 1); // Multiply them together

  useEffect(() => {
    const interval = setInterval(() => {
      setVarietyPackImageCounter((varietyPackImageCounter + 1) % maxCounter);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div class="product-select__controls__bundles">
      {bundleTitle && (
        <div class="product-select__controls__bundles__title normal-size">
          {bundleTitle}
        </div>
      )}
      <div class="product-select__controls__bundles__bundle-products">
        <div class="product-select__controls__bundles__bundle-product-container">
          <ProductThumbnail
            image={currentVariant.image}
            selected={false}
            blur={selectedBundleProduct !== null || varietyPacksIsSelected}
            onClick={() => {
              scrollToModal(605);
            }}
          />
        </div>
        {bundleProducts.map((product, i) => (
          <div
            class="product-select__controls__bundles__bundle-product-container"
            key={i}>
            <ProductThumbnail
              image={currentBundleVariants[i].image}
              selected={selectedBundleProduct === product}
              blur={
                (selectedBundleProduct !== null &&
                  selectedBundleProduct !== product) ||
                varietyPacksIsSelected
              }
              onClick={() => {
                scrollToModal();
                setVarietyPacksIsSelected(false);
                setSelectedBundleProduct(product);
              }}
            />
          </div>
        ))}
        {currentVarietyPack && (
          <div class="product-select__controls__bundles__bundle-product-container">
            {currentVarietyPack.variants.length ? (
              <ProductThumbnail
                image={
                  currentVarietyPack.variants[
                    varietyPackImageCounter % currentVarietyPack.variants.length
                  ].image
                }
                selected={varietyPacksIsSelected}
                blur={selectedBundleProduct !== null}
                onClick={() => {
                  scrollToModal();
                  setSelectedBundleProduct(null);
                  setVarietyPacksIsSelected(true);
                }}
              />
            ) : null}
          </div>
        )}
      </div>
      <div
        class="product-select__controls__bundles__add-to-cart-bundle"
        ref={addToCartRef}>
        <AddToCartButton
          cartMessage="Add Bundle to Cart"
          price={bundlePrice}
          bundle={true}
          onClick={() =>
            addBundleToCart({ currentVarietyPack, currentBundleVariants })
          }
        />
      </div>
      {bundleProducts.map((product, bundleIndex) => {
        return (
          <BundleVariantSelector
            key={bundleIndex}
            product={product}
            show={selectedBundleProduct === product}
            currentVariant={currentBundleVariants[bundleIndex]}
            onClose={() => setSelectedBundleProduct(null)}
            onVariantSelect={(variantIndex) => {
              setSelectedBundleProduct(null); // close modal
              setBundleVariant(bundleIndex, product.variants[variantIndex]);
            }}
          />
        );
      })}
      {currentVarietyPack && (
        <VarietyPackSelector
          varietyPacks={varietyPacks}
          currentVarietyPack={currentVarietyPack}
          imageCounter={varietyPackImageCounter}
          show={varietyPacksIsSelected}
          onClose={() => setVarietyPacksIsSelected(false)}
          onVariantSelect={(i) => {
            setVarietyPacksIsSelected(false);
            setCurrentVarietyPack(varietyPacks[i]);
          }}
        />
      )}
    </div>
  );
}

interface ProductThumbnailProps {
  image: Image;
  selected: boolean;
  blur: boolean;
  onClick?: () => void;
}

function ProductThumbnail({
  image,
  selected,
  blur,
  onClick,
}: ProductThumbnailProps) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      class={`product-select__controls__bundles__bundle-product-image ${
        blur ? (selected ? 'no-blur' : 'blur') : ''
      }`}
      onClick={onClick}
      loading="lazy"
    />
  );
}
