/** @jsx h */
import { h } from 'preact';
import './style.scss';
import JourneyItem from './JourneyItem';
import Cheers from './Cheers';

const journey = [
  {
    image: {
      src: 'https://images.ctfassets.net/strhx3d94c40/1PXV6RhoytijqxDo5CMOVa/888b1fbfc4d02a6b8c6194cd99405062/Two-Tech-Guys-Meet.jpg?fm=webp',
      alt: 'Ryan Pamplin with his friend John Zheng',
    },
    heading: 'TWO TECH GUYS MEET',
    content:
      '<p>It all started more than a decade ago, when Ryan Pamplin and John Zheng met through colleagues and formed a friendship. Over the years, the two Bay Area tech guys kept in touch while achieving success in their own careers.</p><p>But it was a freak accident 10 years later that brought them together to embark on a path to make the world a healthier place.</p>',
    style: 'dark',
  },
  {
    image: {
      src: 'https://images.ctfassets.net/strhx3d94c40/3qjYDHS57rFC3YNri57FAS/be3964672b63f05c07c639a8abf74e6d/about-more-to-life.jpg?fm=webp',
      alt: 'Ryan Pamplin with his Wife Kathryn',
    },
    heading: "THERE'S MORE TO LIFE THAN TECH",
    content:
      '<p>Let’s pause that part of the story for a moment, because before Ryan and John joined forces, Ryan met Kathryn O’Malley (yep, this is one of those online-dating success stories).</p><p></p><p>At the time, Kathryn was a Los Angeles–based food blogger and an editor of GNC’s WellBella magazine. When she wasn’t behind a desk, she was acting in commercials and religiously taking Barry’s Bootcamp classes (and paying way too much for after-class smoothies). When Ryan agreed to take a Barry’s class with Kathryn, she knew he was a keeper!</p>',
    style: 'light',
    textStyle: 'right',
    direction: 'reverse',
  },
  {
    heading: 'LIFE TAKES AN UNEXPECTED TURN',
    content:
      '<p>Soon, Kathryn moved to the Bay Area to be with Ryan. While just beginning their new life together, they were thrown a curveball when Ryan suffered from a traumatic brain injury with severe post-concussive syndrome. In order to ensure his recovery, he not only couldn’t work for almost a year, but he also couldn’t use a computer, look at a screen, or even read for many months. The silver lining during this devastating time was that Ryan became laser-focused on his health and fueling his body with nutrition that would help him heal — and Kathryn was there by his side every step of the way. A favorite activity of theirs was cooking delicious vegan recipes together and making <a href="https://blendjet.com/recipes" className=""><strong>nutrient-rich smoothies</strong></a>.</p>',
    style: 'light',
    textStyle: 'center',
  },
  {
    image: {
      src: 'https://images.ctfassets.net/strhx3d94c40/55KCbVpxGybZ2udxAewSd3/2953328aaeaff3b9818aaba989159299/aboutRenewed__1_.jpg?fm=webp',
      alt: 'Delicious Fruits Smoothie',
    },
    heading: 'A RENEWED SENSE OF PURPOSE',
    content:
      '<p>After the accident, Ryan reconnected with John and expressed that he wanted to create a product that would help people live longer, healthier lives, and the two put their entrepreneurial heads together. Since they both relied on daily smoothies to supplement their nutrition — post-workout shakes for John, and fruit smoothies for Ryan — they realized what was missing from the market was a blender that could make a clump-free shake or smoothie right at the gym or on the go.</p>',
    style: 'light',
  },
  {
    heading: 'THE DREAM BECOMES A REALITY',
    content:
      '<div class="our-journey__section__text-block__main"><h5>In 2017, they co-founded BlendJet. Next, they needed talented people to fill out their founding team if they wanted to take their idea into the stratosphere.</h5><p>Kathryn, with her commercial background, was an easy choice to star in the BlendJet videos, but it was her communication skills and personability that made her the perfect person to build the ever-growing Customer Experience team.</p><p>To round out the founding team, Ryan and John chose Brian Zuk, a friend of John’s for many years. Brian used to run a hugely popular car channel on YouTube, but it was his MBA and expertise in international business that made him the ideal person to run operations, oversee fulfillment, and forge the pivotal manufacturing partnership to build the <a href="https://blendjet.com/products/blendjet-one"><strong>BlendJet One</strong></a>.</p></div>',
    style: 'light',
    background:
      'https://images.ctfassets.net/strhx3d94c40/4Kb5HbGYPAbSzonuc1hVP3/0402a1963e7252932194555cff02ec44/about-dream-dark.jpg?fm=webp',
  },
  {
    image: {
      src: 'https://images.ctfassets.net/strhx3d94c40/7g9Q7TOc11rJyoIcU5WUOb/5efc8152df1697baffd0bc6d1aaa7356/about-continues.jpg?fm=webp',
      alt: 'The BlendJet Team',
    },
    heading: 'OUR STORY CONTINUES',
    content:
      '<p>So that’s the story of how BlendJet came to be, but there’s more to it—and us—than that. It’s often said that it’s through adversity that people find their true strength and sense of purpose. That’s certainly true for Ryan, and it was his accident that brought us together in this shared mission of spreading health and wellness across the globe. We’re so close that we’re like family. In fact, Ryan and Kathryn tied the knot in 2019 with the BlendJet team alongside them, and everyone toasted with BlendJets on their wedding day.</p><p>That sense of family and connection extends to you, our customers. We thank you for your faith in us and our products, and are honored to tag along with you on all of your adventures.</p>',
    style: 'light',
    direction: 'reverse',
  },
];

export default function OurJourney() {
  return (
    <div className="our-journey">
      <div className="our-journey__title">Our Journey</div>
      <div className="our-journey__container">
        {journey.map((item, ndx) => (
          <JourneyItem {...item} />
        ))}
      </div>
      <div className="our-journey__cheers">
        <div className="our-journey__cheers__svg">
          <Cheers />
        </div>
        <div className="text-centered text-purple our-journey__blendjet-team">
          The Blendjet Team
        </div>
      </div>
    </div>
  );
}
