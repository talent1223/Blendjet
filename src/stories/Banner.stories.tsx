/** @jsx h */
import { h } from 'preact';
import { Banner, BannerProps } from '../components/Banner/Banner';
import { pageData } from '../mock-data/fullPageData';

const title = 'Banner';
export default {
  title,
  component: Banner,
};

// We create a "template" of how args map to rendering.
// TODO: Storybook types are causing type errors. Change to any for now.
// const BannerTemplate: Story<BannerProps> = (args) => (
const BannerTemplate: any = (args: any) => {
  return args.isLisaFrank ? (
    <div class="lisa-frank">
      <Banner {...args} />
    </div>
  ) : (
    <Banner {...args} />
  );
};

// Each variation story reuses that template, then mocks different input data
export const BannerStory = BannerTemplate.bind({});

// See the Controls tab in Storybook to toggle `isLisaFrank`
BannerStory.args = {
  isLisaFrank: false,
  ...pageData.banner,
};

BannerStory.storyName = title;
