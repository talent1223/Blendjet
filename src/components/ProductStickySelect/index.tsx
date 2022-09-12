/** @jsx h */
import { Fragment, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { ApplicationState, useSharedState } from '../../hooks/useSharedState';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';
import { ProductOptionSwatch } from '../ProductOptionSwatch/ProductOptionSwatch';

import { getDisplayPrice } from '../../lib/utils';

import './style.scss';
import { Image } from '../../types/image';
import { ColorOrder } from '../ColorSelector/ColorSelector';
import { currency } from '../../mock-data/currency';
import { ProductVariantDropDown } from '../ProductVariantDropDown';
import { dropDown } from '../Icons/icons';

export interface ProductStickySelectProps {
  image: Image;
  title: string;
  comparedPrice?: string;
  selectedColor?: {
    title: string;
    id: string;
    price: string;
  };
  totalPrice: string;
  currency?: ApplicationState['context']['currency'];
  ship?: string;
  addItemToCart?: (cartItem: any) => void;
  colorOrder?: ColorOrder;
  variants?: {
    title: string;
    image: Image;
    priceCurrency: string;
    id: string;
  }[];
}

export function ProductStickySelect({
  image,
  title,
  comparedPrice,
  selectedColor,
  totalPrice,
  ship,
  addItemToCart = (cartItem: any) => null,
  colorOrder,
  variants,
}: ProductStickySelectProps) {
  const useSharedStateStore = useSharedState();
  const { quantity, decrementQuantity, incrementQuantity } =
    useSharedStateStore((state) => ({
      quantity: state.quantity,
      decrementQuantity: state.decrementQuantity,
      incrementQuantity: state.incrementQuantity,
      addItemToCart: state.addItemToCart,
    }));

  const [scrollY, setScrollY] = useState(window.scrollY);
  const [showDesktopHeader, toggleShowDesktopHeader] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      if (window.scrollY > 300) {
        toggleShowDesktopHeader(true);
      } else {
        toggleShowDesktopHeader(false);
      }
    }
  }, [scrollY]);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [openDropdown, toggleOpenDropdown] = useState(false);

  return (
    <Fragment>
      <div
        className="product-sticky-select fade-enter-active"
        style={{ display: showDesktopHeader ? 'flex' : 'none' }}>
        <div className="product-sticky-select__info-container">
          <div className="product-sticky-select__thumbnail">
            <img {...image} className="product-sticky-select__thumbnail__img" />
          </div>
          <div className="product-sticky-select__title-container">
            <div className="product-sticky-select__title-container__title">
              {title}
            </div>
            <div className="product-sticky-select__title-container__price">
              <span
                className="productPrice nacelle"
                data-wg-notranslate="manual">
                {selectedColor
                  ? selectedColor.price
                  : getDisplayPrice(
                      totalPrice,
                      currency[
                        variants
                          ? (variants[0].priceCurrency as unknown as
                              | 'USD'
                              | 'EUR'
                              | 'ARS'
                              | 'JPY')
                          : 'USD'
                      ],
                    )}
              </span>{' '}
              <span
                className="productPrice nacelle strikethrough-price"
                data-wg-notranslate="manual">
                {comparedPrice}
              </span>
            </div>
          </div>
        </div>
        <div className="product-sticky-select__controls-container overflow-visible">
          <div className="product-sticky-select__swatches">
            {selectedColor ? (
              <div
                tabIndex={0}
                className="dropdown"
                onClick={() => toggleOpenDropdown(!openDropdown)}
                onBlur={() => toggleOpenDropdown(false)}>
                <div role="button" className="dropbtn">
                  <div className="dropbtn__swatch">
                    <ProductOptionSwatch
                      colorId={selectedColor.id}
                      isSelected={false}
                      swatchClicked={() => {}}
                    />
                  </div>
                  <div className="dropbtn__text">
                    <div className="dropbtn__text__color">
                      {selectedColor.title.replace('LISA FRANK ', '')}
                    </div>
                    <div className="dropbtn__text__shipping">
                      <div className="shipping-container">
                        <div className="small-size">
                          <span>{ship}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropbtn__caret-down">
                    <div className="svg-container">{dropDown}</div>
                  </div>
                </div>
                <div
                  class="dropdown-content fade-enter-active"
                  style={{ display: openDropdown ? 'flex' : 'none' }}>
                  <div class="dropdown-content__swatches">
                    <div class="options nacelle">
                      {colorOrder
                        ? colorOrder.map((item, id) => (
                            <div class="option" key={id}>
                              <ProductOptionSwatch
                                {...item}
                                colorId={item.swatch}
                                isSelected={item.swatch === selectedColor.id}
                              />
                            </div>
                          ))
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {variants ? (
              <ProductVariantDropDown
                image={image}
                variants={variants}
                selected={variants[0].id}
              />
            ) : null}
          </div>
          <div className="product-sticky-select__add-buttons">
            <div className="add-to-cart-buttons overflow-visible w-max">
              <div className="quantity-select-container">
                <QuantitySelector
                  quantity={quantity}
                  decrementQuantity={decrementQuantity}
                  incrementQuantity={incrementQuantity}
                  height="large"
                />
              </div>
              <AddToCartButton onClick={addItemToCart} price={totalPrice} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
