/** @jsx h */
import { h } from 'preact';
import { ColorSelector } from '../components/ColorSelector/ColorSelector';
import { useSharedState } from '../hooks/useSharedState';

export type ColorSelectorContainerProps = {};

export function ColorSelectorContainer({}: ColorSelectorContainerProps) {
  // Shared State
  const useSharedStateStore = useSharedState();
  const currentVariant = useSharedStateStore((state) => state.currentVariant);
  const colorOrder = useSharedStateStore((state) => state.colorOrder);

  return (
    <ColorSelector
      colorOrder={colorOrder}
      selectedColor={{
        id: currentVariant.colorId,
        title: currentVariant.title,
      }}
    />
  );
}
