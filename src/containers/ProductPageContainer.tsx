/** @jsx h */
import { Fragment, ComponentChildren, h } from 'preact';
import { HeaderContainer } from './HeaderContainer';
import { Promotion } from '../components/Promotion/Promotion';
import { Footer } from '../components/Footer/Footer';
import { staticData } from '../static-data';

import api from '../../outsmartly/content-sources/api.json';
import { TransformedData } from '../../outsmartly/content-sources/src/transform/transform-data';
import { filterMobileUpsellsByCountry } from '../../outsmartly/content-sources/src/runtime/filterMobileUpsellsByCountry';
import { RelatedProductsContainer } from './RelatedProductsContainer';

const blendjet2Api = api['blendjet-2'] as TransformedData['blendjet-2'];
const jetpackData = api['jetpack'];

const locale = {
  country: 'US',
};

export default function ProductPageContainer({
  children,
  page = 'blendjet-2',
}: {
  children: ComponentChildren;
  page?: string;
}) {
  const { header, promotion, footer } = staticData;
  const mobileCartUpsells = filterMobileUpsellsByCountry(
    blendjet2Api.mobileCartUpsells,
    locale.country,
  );
  const relatedProducts =
    page === 'blendjet-2'
      ? blendjet2Api.relatedProducts
      : jetpackData.relatedProducts;
  return (
    <Fragment>
      <div id="header">
        <HeaderContainer {...header} mobileCartUpsells={mobileCartUpsells} />
      </div>
      <Promotion {...promotion} />
      {children}
      <RelatedProductsContainer {...relatedProducts} />
      <Footer {...footer} />
    </Fragment>
  );
}
