/** @jsx h */
import { h } from 'preact';
import { ApplicationState } from '../../hooks/useSharedState';
import { getDisplayPrice } from '../../lib/utils';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';
import { CartItemDetailSubscription } from './CartItemDetailSubscription';

export type CartItemProps = {
  href: string;
  title: string;
  subtitle: string;
  img: {
    src: string;
    altText: string | undefined;
  };
  price: string;
  quantity: number;
  increment: () => void;
  decrement: () => void;
  isSubscription: boolean;
  discountPercentage?: number;
};

function CartItem({
  title,
  subtitle,
  href,
  img,
  price,
  quantity,
  increment,
  decrement,
  isSubscription,
  discountPercentage,
  currency,
}: CartItemProps & { currency: ApplicationState['context']['currency'] }) {
  const displayPrice = getDisplayPrice(price, currency);
  return (
    <div class="cart-item">
      <a href={href} class="product-image column is-3">
        <div class="product-image">
          <picture>
            <img src={img.src} alt={img.altText} width={60} />
          </picture>
        </div>
      </a>
      <div class="product-details">
        <div class="product-row">
          <div class="product-title-container">
            <a class="product-link product-details__title" href={href}>
              {title}
            </a>
          </div>
          <div class="product-details__price">{displayPrice}</div>
        </div>
        <div class="product-row">
          <div class="product-details__variant">{subtitle}</div>
        </div>
        <div class="product-row">
          <QuantitySelector
            quantity={quantity}
            decrementQuantity={decrement}
            incrementQuantity={increment}
            height="small"
          />
        </div>
        <div class="product-row">
          {isSubscription && (
            <CartItemDetailSubscription
              discountPercentage={discountPercentage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// export type CartItem = {
//   id: string;
//   handle: string;
//   title: string;
//   variant: {
//     id: string;
//     price: string;
//     title: string;
//     featuredMedia: {
//       thumbnailSrc: string;
//       altText: string | undefined;
//     };
//   };
//   quantity: number;
//   metafields: { key: string; value: string; }[];
//   isSubscription: boolean;
//   increment: () => void;
//   decrement: () => void;
// };

// function CartItem({
//   title,
//   handle,
//   variant,
//   quantity,
//   isSubscription,
//   increment,
//   decrement,
// }: CartItem) {
//   return (
//     <div class="cart-item">
//       <a href={`/products/${handle}`} class="product-image">
//         <picture>
//           <img src={variant.featuredMedia.thumbnailSrc} alt={variant.featuredMedia.altText} width={60} />
//         </picture>
//       </a>
//       <div class="product-details">
//         <div class="product-row">
//           <div class="product-title-container">
//             <a class="product-link product-details__title" href={`/products/${handle}`}>
//               {title}
//             </a>
//           </div>
//           <div class="product-details__price">${variant.price}</div>
//         </div>
//         <div class="product-row">
//           <div class="product-details__variant">{variant.title}</div>
//         </div>
//         <div class="product-row">
//           <QuantitySelector
//             quantity={quantity}
//             decrementQuantity={decrement}
//             incrementQuantity={increment}
//             height="small"
//           />
//         </div>
//         {isSubscription ? <div>Auto Delivery (make me pretty with css)</div>: null}
//       </div>
//     </div>
//   );
// }

export function CartItems({
  items,
  currency,
}: {
  items: CartItemProps[];
  currency: ApplicationState['context']['currency'];
}) {
  return (
    <div class="cart-items">
      {items.map((item, i) => (
        <CartItem {...item} key={i} currency={currency} />
      ))}
    </div>
  );
}
