/** @jsx h */
import { h } from 'preact';
import './style.scss';

import { TabSelectorProps, TabSelector } from '../TabSelector';
import { ProductSummaryProps, ProductSummary } from '../ProductSummary';
import {
  ProductVariantProps,
  ProductVariantDropDown,
} from '../ProductVariantDropDown';
import {
  SubscriptionToggleProps,
  SubscriptionToggle,
} from '../SubscriptionToggle/SubscriptionToggle';

import {RecommendQuantity} from '../RecommendQuantity'
import {AddToCartGroup, AddToCartGroupProps} from '../AddToCartGroup'

export interface JetPackPurchaseProps {
  categoryTabData: TabSelectorProps;
  summary: ProductSummaryProps;
  variants: ProductVariantProps[];
  subscribeSetting: SubscriptionToggleProps;
  addCartData: AddToCartGroupProps
}

export function JetPackPurchase({
  categoryTabData,
  summary,
  variants,
  subscribeSetting,
  addCartData
}: JetPackPurchaseProps) {
  return (
    <div class="jetpack-purchase">
      <TabSelector {...categoryTabData} />
      <ProductSummary {...summary} />
      <ProductVariantDropDown
        variants={variants}
        selected={variants[0].id}
        className="w-full px-20 mb-20"
        image={variants[0].image}
      />
      <SubscriptionToggle {...subscribeSetting} />
      <RecommendQuantity />
      <AddToCartGroup
        {...addCartData}
      />
    </div>
  );
}
