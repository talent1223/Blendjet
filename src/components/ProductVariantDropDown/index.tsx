/** @jsx h */
import { Fragment, h } from 'preact';
import { dropDown } from '../Icons/icons';
import './style.scss';
import { Image } from '../../types/image';
import { useEffect, useState } from 'preact/hooks';
export interface ProductVariantDropDownProps {
  variants: ProductVariantProps[];
  selected: string;
  image: Image;
  className?: string;
  onSelect?: (id: string) => void;
}

export interface ProductVariantProps {
  image: Image;
  id: string;
  title: string;
}
export function ProductVariantDropDown({
  variants,
  selected,
  image,
  className = '',
}: ProductVariantDropDownProps) {
  const [openDropdown, toggleOpenDropdown] = useState(false);

  const [selectedVariant, onSelectVariant] = useState(selected);

  let { title } = variants.filter((item) => item.id === selectedVariant)[0];
  return (
    <div
      className={`variant-dropdown px-10 ${className}`}
      onClick={() => toggleOpenDropdown(!openDropdown)}
      onBlur={() => {
        toggleOpenDropdown(false);
      }}>
      <div
        className="variant-dropbtn"
        style={{ visibility: openDropdown ? 'hidden' : 'visible' }}>
        <div className="flex variant-dropdown-thumb">
          <img {...image} className="dropdown-thumb-image" />
        </div>{' '}
        <div>{title}</div>{' '}
        <div
          className="svg-container"
          style="margin-left: 10px; margin-right: 10px;">
          {dropDown}
        </div>
      </div>
      {openDropdown ? (
        <div
          className="fade-enter-active"
          onBlur={() => toggleOpenDropdown(false)}>
          <ul
            class="variant-dropdown-list variant-dropdown-content fade-leave-active fade-leave-to"
            onBlur={() => toggleOpenDropdown(false)}>
            <li>
              <div class="dropdown-thumb">
                <img {...image} class="dropdown-thumb-image" />
              </div>{' '}
              <div>Variety Pack (6)</div>
            </li>
            {variants.map((item) => (
              <li key={item.id} onClick={() => onSelectVariant(item.id)}>
                <div class="dropdown-thumb">
                  <img {...item.image} class="dropdown-thumb-image" />
                </div>{' '}
                <div>{item.title}</div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
