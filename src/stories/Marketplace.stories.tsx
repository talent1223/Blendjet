/** @jsx h */
import { h } from 'preact';
import { TextRibbon } from '../components/TextRibbon';
import {
  marketplaceHeroRibbonMock,
  jetpackRibbonMock,
  superFoodsRibbonMock,
  accessoriesRibbonMock,
} from '../mock-data/textRibbon';

import { MarketplaceBrandMarquee } from '../components/MarketplaceBrandMarquee/MarketplaceBrandMarquee';
import { marketplaceBrandMarqueeMock } from '../mock-data/marketplaceBrandMarquee';

import {
  MarketplaceNavigation,
  MarketplaceNavigationProps,
} from '../components/MarkeplaceNavigation/MarketplaceNavigation';
import { marketplaceNavigationMock } from '../mock-data/marketplaceNavigation';

import { LinkTiles, LinkTilesProps } from '../components/LinkTiles/LinkTiles';
import { marketplaceSliderMock } from '../mock-data/linkTiles';

import {
  ProductGrid,
  ProductGridProps,
} from '../components/ProductGrid/ProductGrid';
import {
  productGridJetpacksMock,
  productGridAccessoriesMock,
  productGridSuperfoodsMock,
} from '../mock-data/productGrid';

export default {
  title: 'Marketplace',
  component: TextRibbon,
};

export const Marketplace = () => {
  return (
    <div>
      <TextRibbon {...marketplaceHeroRibbonMock} />
      <MarketplaceBrandMarquee {...marketplaceBrandMarqueeMock} />
      <MarketplaceNavigation {...marketplaceNavigationMock} />
      <LinkTiles {...marketplaceSliderMock} />
      <TextRibbon {...jetpackRibbonMock} />
      <ProductGrid {...productGridJetpacksMock} addToCart={console.log} />
      <TextRibbon {...superFoodsRibbonMock} />
      <ProductGrid {...productGridSuperfoodsMock} addToCart={console.log} />
      <TextRibbon {...accessoriesRibbonMock} />
      <ProductGrid {...productGridAccessoriesMock} addToCart={console.log} />
    </div>
  );
};
