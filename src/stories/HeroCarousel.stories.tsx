/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import {
  HeroCarousel,
  HeroCarouselProps,
} from '../components/HeroCarousel/HeroCarousel';
import { heroImagesMock } from '../mock-data/heroImages';
import { mediaContentCarouselMock } from '../mock-data/mediaContentCarousel';

const title = 'Hero Carousel';
export default {
  title,
  component: HeroCarousel,
};

// We create a "template" of how args map to rendering.
// TODO: Storybook types are causing type errors. Change to any for now.
// const HeroCarouselTemplate: Story<HeroCarouselProps> = (args) => (
const HeroCarouselTemplate: any = (args: any) => {
  const initialCurrentVariantIndex = 3;

  const [currentVariantIndex, setCurrentVariantIndex] = useState(
    initialCurrentVariantIndex,
  );

  const numVariants = args.imageArray.length;

  const testIndex = 2;

  const storyProps: HeroCarouselProps = {
    images: args.imageArray,
    currentVariantIndex,
    initialCurrentVariantIndex,
    setCurrentVariantByIndex: (newIndex: number) => {
      setCurrentVariantIndex(newIndex);
    },
  };

  return (
    <div>
      <HeroCarousel {...storyProps} />

      <p>Current Variant Index: {currentVariantIndex}</p>

      <p>Alt text: {args.imageArray[currentVariantIndex].alt}</p>

      {/* Click this button to simulate a swatch click  */}
      <button onClick={() => setCurrentVariantIndex(testIndex)}>
        Set to {testIndex} right now
      </button>
    </div>
  );
};

// Each variation story reuses that template, then mocks different input data
export const FourMediaImages = HeroCarouselTemplate.bind({});
FourMediaImages.args = {
  imageArray: mediaContentCarouselMock,
};

export const AllVariantImages = HeroCarouselTemplate.bind({});
AllVariantImages.args = {
  imageArray: heroImagesMock,
};

HeroCarouselTemplate.storyName = title;
