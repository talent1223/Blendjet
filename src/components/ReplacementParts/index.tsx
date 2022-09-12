/** @jsx h */
import { h } from 'preact';
import { TextRibbonProps, TextRibbon } from '../TextRibbon';
import { LinkTiles, LinkTilesProps } from '../LinkTiles/LinkTiles';
import { ProductGrid, ProductGridProps } from '../ProductGrid/ProductGrid';

import './style.scss';

export interface ReplacementPartsProps {
  ribbons: TextRibbonProps[];
  tiles: LinkTilesProps;
  products_v1: ProductGridProps;
  products_v2: ProductGridProps;
}
export function ReplacementParts({
  ribbons,
  tiles,
  products_v1,
  products_v2,
}: ReplacementPartsProps) {
  return (
    <div>
      <TextRibbon {...ribbons[0]} />
      <LinkTiles {...tiles} />
      <TextRibbon {...ribbons[1]} />
      <ProductGrid {...products_v1} />
      <TextRibbon {...ribbons[2]} />
      <ProductGrid {...products_v2} />
    </div>
  );
}
