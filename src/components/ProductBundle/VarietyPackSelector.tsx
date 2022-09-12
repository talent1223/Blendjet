/** @jsx h */
import { h } from 'preact';
import { VarietyPack } from './ProductBundle';
import { SelectorModal } from './SelectorModal';

interface VariantSelectorProps {
  varietyPacks: VarietyPack[];
  currentVarietyPack: VarietyPack;
  imageCounter: number;
  show: boolean;
  onClose: () => void;
  onVariantSelect: (i: number) => void;
}

export function VarietyPackSelector({
  varietyPacks,
  currentVarietyPack,
  imageCounter,
  show,
  onClose,
  onVariantSelect,
}: VariantSelectorProps) {
  return (
    <SelectorModal
      show={show}
      onClose={onClose}
      video={currentVarietyPack.video}>
      <ul class="variety-dropdown-content">
        {varietyPacks.map((varietyPack, i) => {
          const image =
            varietyPack.variants[imageCounter % varietyPack.variants.length]
              .image;
          return (
            <li key={i} onClick={() => onVariantSelect(i)}>
              <span class="dropdown-thumb">
                <img
                  src={image.src}
                  alt={image.alt}
                  class="dropdown-thumb-image"
                />
              </span>
              {varietyPack.name}
            </li>
          );
        })}
      </ul>
    </SelectorModal>
  );
}
