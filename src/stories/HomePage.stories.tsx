/** @jsx h */
import { Fragment, h } from 'preact';

import { Footer } from '../components/Footer/Footer';
import { HeaderContainer } from '../containers/HeaderContainer';

import { staticData } from '../static-data';
const { header, footer, promotion, productReviews, valueProps } = {
  header: staticData.header,
  footer: staticData.footer,
  promotion: staticData.promotion,
  productReviews: staticData.productReviews,
  valueProps: staticData.valueProps,
};

import { HomeBanner } from '../components/HomeBanner/HomeBanner';
import { homeBannerMock } from '../mock-data/homeBannerMock';

import { Promotion } from '../components/Promotion/Promotion';
import { promotionMock } from '../mock-data/promotion';

import { AsSeenOnMarquee } from '../components/AsSeenOnMarquee/AsSeenOnMarquee';
import { asSeenOnMarqueeMock } from '../mock-data/asSeenOnMarqueeMock';

import { IntroducingBlendjet } from '../components/IntroducingBlendjet/IntroducingBlendjet';
import { introducingBlendjetMock } from '../mock-data/introducingBlendjetMock';

import { FreeShippingMarquee } from '../components/FreeShippingMarquee/FreeShippingMarquee';
import { FreeShippingMarqueeMock } from '../mock-data/FreeShippingMarqueeMock';

import { HomeJetpacks } from '../components/HomeJetpacks/HomeJetpacks';
import { homeJetpacksMock } from '../mock-data/homeJetpacks';

import { HomeAccessories } from '../components/HomeAccessories/HomeAccessories';
import { homeAccessoriesMock } from '../mock-data/homeAccessories';

import { HomeMarketplace } from '../components/HomeMarketplace/HomeMarketplace';
import { homeMarketplaceMock } from '../mock-data/homeMarketplace';

import { HomeOurStory } from '../components/HomeOurStory/HomeOurStory';
import { homeOurStoryMock } from '../mock-data/homeOurStoryMock';

import { HomeRecipes } from '../components/HomeRecipes/HomeRecipes';
import { homeRecipesMock } from '../mock-data/homeRecipesMock';

import { HomeTestimonial } from '../components/HomeTestimonial/HomeTestimonial';
import { homeTestimonialMock } from '../mock-data/homeTestimonialMock';

import { HomeInstagram } from '../components/HomeInstagram/HomeInstagram';
import { homeInstagramMock } from '../mock-data/homeInstagramMock';

import { TransformedData } from '../../outsmartly/content-sources/src/transform/transform-data';
import api from '../../outsmartly/content-sources/api.json';
import { filterMobileUpsellsByCountry } from '../../outsmartly/content-sources/src/runtime/filterMobileUpsellsByCountry';
const blendjet2Api = api['blendjet-2'] as TransformedData['blendjet-2'];
const locale = {
  country: 'US',
};
// data from content api
const { mobileCartUpsells } = {
  mobileCartUpsells: filterMobileUpsellsByCountry(
    blendjet2Api.mobileCartUpsells,
    locale.country,
  ),
};

const title = 'Home Page';
export default {
  title,
};

export const HomeBannerStory = () => {
  return (
    <Fragment>
      <div id="header">
        <HeaderContainer {...header} mobileCartUpsells={mobileCartUpsells} />
      </div>
      <HomeBanner {...homeBannerMock} />
      <Promotion {...promotionMock} />
      <AsSeenOnMarquee {...asSeenOnMarqueeMock} />
      <IntroducingBlendjet {...introducingBlendjetMock} />
      <FreeShippingMarquee {...FreeShippingMarqueeMock} />
      <HomeJetpacks {...homeJetpacksMock} />
      <HomeAccessories {...homeAccessoriesMock} />
      <HomeMarketplace {...homeMarketplaceMock} />
      <HomeOurStory {...homeOurStoryMock} />
      <HomeRecipes {...homeRecipesMock} />
      <HomeInstagram {...homeInstagramMock} />
      <HomeTestimonial {...homeTestimonialMock} />
      <Footer {...footer} />
    </Fragment>
  );
};

HomeBannerStory.storyName = title;
