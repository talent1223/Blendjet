/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { InfoButton } from '../RelatedProducts/SubscribeSelect';
import { Modal } from '../Modal/Modal';
import { AboutExtend } from './AboutExtend';
import { Image } from '../../types/image';
import './style.scss';

export interface ProcessedWarrantyItem {
  label: string;
  displayPrice: string;
  handle: string;
}

export interface ProductWarrantyProps {
  productType: string;
  image: Image;
  items: ProcessedWarrantyItem[];
  country: string;
  selectedWarrantyHandle: string | null;
  setSelectedWarrantyHandle: (handle: string | null) => void;
}

export function ProductWarranty({
  productType,
  image,
  items,
  country,
  selectedWarrantyHandle,
  setSelectedWarrantyHandle,
}: ProductWarrantyProps) {
  if (country === 'US' && productType === 'Blendjet') {
    const [showExtendModal, setShowExtendModal] = useState<boolean>(false);

    return (
      <div class="product-select__controls__extend-warranty">
        <div
          class="product-select__controls__extend-warranty__text"
          onClick={() => setShowExtendModal(true)}>
          Add accident protection offered by
          <img
            class="product-select__controls__extend-warranty__logo"
            src="/static-489c224a/public/extend.png" //{image.src}
            alt="Extend" //{image.alt}
          />
          <InfoButton onClick={() => setShowExtendModal(true)} />
        </div>
        <div class="product-select__controls__extend-warranty__button-group">
          {items.map(({ displayPrice, label, handle }, i) => (
            <ExtendWarrantyButton
              key={i}
              displayPrice={displayPrice}
              label={label}
              selected={selectedWarrantyHandle === handle}
              onClick={() => {
                selectedWarrantyHandle === handle
                  ? setSelectedWarrantyHandle(null)
                  : setSelectedWarrantyHandle(handle);
              }}
            />
          ))}
        </div>
        <Modal show={showExtendModal} onClose={() => setShowExtendModal(false)}>
          <AboutExtend />
        </Modal>
      </div>
    );
  }
  return null;
}

interface ExtendWarrantyButtonProps {
  label: string;
  displayPrice: string;
  selected: boolean;
  onClick?: () => void;
}

function ExtendWarrantyButton({
  label,
  displayPrice,
  selected,
  onClick,
}: ExtendWarrantyButtonProps) {
  return (
    <button
      class={`product-select__controls__extend-warranty__button ${
        selected ? 'extend-active' : 'extend-inactive'
      }`}
      onClick={onClick}>
      {label} – {displayPrice}
    </button>
  );
}
