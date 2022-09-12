/** @jsx h */
import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { loadAfterpay } from '../../third-party-scripts/afterpay';
import './style.scss';

// To use <afterpay-placement> custom element, we need to add it to
// IntrinisicElements. Source: https://stackoverflow.com/a/67166841
declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      'afterpay-placement': OverlayTriggerAttributes;
    }
  }
}
interface OverlayTriggerAttributes
  extends preact.JSX.HTMLAttributes<HTMLElement> {}

declare global {
  interface Window {
    Afterpay: any;
  }
}

export interface AfterpayProps {
  locale?: string;
  currency?: string;
  modalTheme?: string;
  size?: string;
  logoType?: string;
  price: string;
}

/**
 * Add Afterpay Messaging to your site. Here our props are using defaults for
 * BlendJet, not the Afterpay defaults.
 * - Afterpay attributes and defaults:
 *   https://developers.afterpay.com/afterpay-online/docs/javascript-library
 * - Styling:
 *   https://developers.afterpay.com/afterpay-online/docs/style-installment-messaging
 */
export function AfterpayScript({
  locale = 'en_US',
  currency = 'USD',
  modalTheme = 'white',
  size = 'xs',
  logoType = 'lockup',
  price,
}: AfterpayProps) {
  useEffect(() => {
    loadAfterpay();
  }, []);

  return (
    <div
      class="product-select__controls__price__installments"
      style="margin-bottom: 18px;">
      <afterpay-placement
        data-locale={locale}
        data-currency={currency}
        data-modal-theme={modalTheme}
        data-logo-type={logoType}
        data-size={size}
        data-amount={price}
      />
    </div>
  );
}
