/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { LeadershipGrid } from '../LeadershipGrid/LeadershipGrid';
import { LeadershipCardProps } from '../LeadershipCard/LeadershipCard';
import { GenericBanner } from '../GenericBanner/GenericBanner';

import AboutUs from './components/AboutUs';
import WhatDriveUs from './components/WhatDriveUs';
import OurJourney from './components/OurJourney';

export function OurStory({ leaders }: { leaders: LeadershipCardProps[] }) {
  return (
    <div className="overflow-hidden">
      <div className="page-container">
        <div style="position:relative;width:100%;height:0;padding-bottom:56.27198%;">
          <iframe
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            width="500"
            height="294"
            src="https://www.youtube.com/embed/Eo4MMePM4R0?&theme=dark&color=white&autohide=1&modestbranding=1&showinfo=0&rel=0"
            frameBorder="0"></iframe>
        </div>
      </div>

      <GenericBanner
        type="title"
        content="<h6>A COMMITMENT TO HEALTH &amp; WELLNESS</h6><h1>WE WERE BORN FROM A MISSION TO HELP PEOPLE LIVE LONGER, HEALTHIER LIVES</h1><p></p>"
      />
      <AboutUs
        image={{
          src: 'https://images.ctfassets.net/strhx3d94c40/4ZzhhpXumHNFGnJBKlpOEQ/47fe9af9ca73d23e2c15f73a20182e16/hero_image.jpg?fm=webp&w=2000',
          alt: 'BlendJet 2 in Sixteen Different Colors with Fruits Inside',
        }}
      />
      <WhatDriveUs />
      <OurJourney />
      <div className="leadership">
        <div className="leadership__heading"> Our Leadership </div>
        <LeadershipGrid leaders={leaders} />
      </div>
    </div>
  );
}
