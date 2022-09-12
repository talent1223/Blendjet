/** @jsx h */
import { Fragment, h } from 'preact';
import { AddToCartGroup } from '../components/AddToCartGroup';
import { Divider } from '../components/Divider';
import { GuaranteeNotice } from '../components/GuaranteeNotice/GuaranteeNotice';
import { HeroCarousel } from '../components/HeroCarousel/HeroCarousel';
import { madeInCa } from '../components/Icons/icons';
import { MediaContentCarousel } from '../components/MediaContentCarousel/MediaContentCarousel';
import { Modal } from '../components/Modal/Modal';
import { ProductBundle } from '../components/ProductBundle/ProductBundle';
import {
  ProductDetails,
  ProductDetailsProps,
} from '../components/ProductDetails/ProductDetails';
import {
  ProductFeatures,
  ProductFeaturesProps,
} from '../components/ProductFeatures/ProductFeatures';
import { ProductStickySelect } from '../components/ProductStickySelect';
import { ProductSummary } from '../components/ProductSummary';
import { ProductVariantDropDown } from '../components/ProductVariantDropDown';
import { RecommendQuantity } from '../components/RecommendQuantity';
import { ShippingNotification } from '../components/ShippingNotification/ShippingNotification';
import { SubscriptionHelp } from '../components/SubscriptionHelp';
import { SubscriptionToggle } from '../components/SubscriptionToggle/SubscriptionToggle';
import { TabSelector } from '../components/TabSelector';
import { TextRibbon, TextRibbonProps } from '../components/TextRibbon';
import { ValueProps } from '../components/ValueProps/ValueProps';
import { ProductSelectContainer } from './ProductSelectContainer';
import { useEffect, useState } from 'react';
import api from '../../outsmartly/content-sources/api.json';
import { TransformedData } from '../../outsmartly/content-sources/src/transform/transform-data';
import { calculateShippingDay } from '../../outsmartly/content-sources/src/runtime/calculateShippingDay';
import { jetpackBannerMock } from '../mock-data/textRibbon';
import { staticData } from '../static-data';
import { useSharedState } from '../hooks/useSharedState';
import { Drawer } from '../components/Modal/Drawer';
import { Cart } from '../components/Cart/Cart';
import { filterMobileUpsellsByCountry } from '../../outsmartly/content-sources/src/runtime/filterMobileUpsellsByCountry';

const blendjet2Api = api['blendjet-2'] as TransformedData['blendjet-2'];
const { productSelect, productBundle } = blendjet2Api;
const { valueProps } = {
  valueProps: staticData.valueProps,
};
const variants = blendjet2Api.variants.map((variant) => ({
  ...variant,
  // in production this happens at the edge
  shippingDate: calculateShippingDay(
    variant.shippingDate,
    variant.shippingOffset,
  ),
}));
const { freeShippingMessage } = staticData.header;

const locale = {
  country: 'US',
};
export function JetPackPageContainer() {
  const useSharedStateStore = useSharedState();

  const mobileCartUpsells = filterMobileUpsellsByCountry(
    blendjet2Api.mobileCartUpsells,
    locale.country,
  );
  const { cart, addToCart } = useSharedStateStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
  }));

  const initiateCheckout = useSharedStateStore(
    (state) => state.initiateCheckout,
  );
  const pageData = api['jetpack'];
  const bannerProps: TextRibbonProps = jetpackBannerMock;

  const [ndx, setNdx] = useState(0);

  const [showModal, toggleModal] = useState(true);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (variants) {
      const interval = setInterval(() => {
        setNdx((ndx) => (ndx + 1) % variants.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [subscribe, setSubscribe] = useState(false);
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  return (
    <Fragment>
      <ProductSelectContainer {...productSelect} />
      <div className="jetpack-sticky-wrapper">
        <ProductStickySelect
          variants={variants}
          title="JETPACK SMOOTHIE"
          totalPrice={pageData.variants[0].price}
          image={{
            src: pageData.variants[ndx].featuredMedia.thumbnailSrc,
            alt: pageData.variants[0].title,
          }}
        />
      </div>
      <div class="product-select flex-nowrap-desktop">
        <HeroCarousel
          images={pageData.carousels}
          initialCurrentVariantIndex={0}
          setCurrentVariantByIndex={(number) => setCurrentVariantIndex(number)}
          currentVariantIndex={currentVariantIndex}
        />
        <div className="product-select__controls">
          <TabSelector
            tabLabels={['Lattes', 'Protein', 'Smoothies']}
            activeIndex={categoryIndex}
            onChange={setCategoryIndex}
            style={{ marginTop: 30 }}
          />
          <ProductSummary
            title={pageData.variants[0].title}
            category="JETPACK SMOOTHIE"
            rating={5}
            raters={4467}
          />
          <div className="w-full" style={{ maxWidth: 360 }}>
            <ProductVariantDropDown
              className="w-full px-20 mb-20"
              image={{
                src: pageData.variants[ndx].featuredMedia.thumbnailSrc,
                alt: pageData.variants[0].title,
              }}
              variants={variants}
              selected={variants[0].id}
            />
            <SubscriptionToggle
              active={subscribe}
              discountPercentage={25}
              onClick={() => {
                setSubscribe(!subscribe);
              }}
              showHelper={true}
              onHelper={() => toggleModal(true)}
            />
          </div>
          <RecommendQuantity />
          <AddToCartGroup
            className="mb-20"
            price={'$19'}
            quantity={0}
            increment={() => null}
            decrement={() => null}
            addCart={() => null}
          />
          <ProductBundle
            {...productBundle}
            bundlePrice="$10"
            currentVariant={{
              image: {
                src: pageData.variants[ndx].featuredMedia.thumbnailSrc,
                alt: pageData.variants[0].title,
              },
            }}
            addBundleToCart={() => null}
          />
          <ShippingNotification
            message="ORDER NOW AND IT SHIPS BY"
            shippingDay="THURSDAY, APRIL 7"
            className="mb-0"
          />
          <Divider className="product-select-divider" />
          <GuaranteeNotice />
          <ValueProps {...valueProps} />
          <Divider className="product-select-divider" />
          <div>{madeInCa}</div>
        </div>
      </div>
      <TextRibbon {...bannerProps} />
      <MediaContentCarousel images={pageData.media} />
      <div class="flex flex-row flex-wrap media-content__main">
        <ProductFeatures
          {...(pageData.productFeatures as unknown as ProductFeaturesProps)}
          rowCount={2}
        />
        <ProductDetails
          {...(pageData.productDetails as unknown as ProductDetailsProps)}
        />
      </div>

      <Modal show={showModal} onClose={() => toggleModal(false)}>
        <SubscriptionHelp />
      </Modal>
      <Drawer
        show={showCart}
        curtainClose={false}
        width={'auto'}
        alignment="right"
        onClose={() => setShowCart(false)}>
        <Cart
          {...cart}
          freeShippingMessage={freeShippingMessage}
          valueProps={valueProps}
          initiateCheckout={initiateCheckout}
          onClose={() => setShowCart(false)}
          mobileCartUpsells={mobileCartUpsells}
          addToCart={addToCart}
        />
      </Drawer>
    </Fragment>
  );
}
