/** @jsx h */
import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';
import { TabSelector } from '../TabSelector';
import './style.scss';

export function RecommendQuantity() {
  const [tabId, setTabId] = useState(0);
  return (
    <div className="product-recommend-quantity">
      <div class="product-recommend-quantity-title">Recommended Quantity</div>
      <TabSelector
        tabLabels={['1', '3', '5']}
        activeIndex={tabId}
        onChange={setTabId}
      />
    </div>
  );
}
