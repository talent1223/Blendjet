/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { FeatureIcon, FeatureIconName } from '../ProductFeatures/FeatureIcon';

export type IntroducingBlendjetProps = {
  screenWidth: number;
  title: string;
  subtitle: string;
  description: string;
  features: Features;
  image: {
    src: string;
  };
  buttonText: string;
  buttonLink: string;
};
export interface Features {
  title: string;
  fields: { icon: FeatureIconName; title: string; description: string }[];
}

export interface ProductFeaturesProps {
  features: Features;
}

export function IntroducingBlendjet({
  screenWidth,
  title,
  subtitle,
  description,
  image,
  buttonText,
  buttonLink,
  features,
}: IntroducingBlendjetProps) {
  return (
    <div class="blendjet-demo">
      <div class="blendjet-demo__title-block">
        <h1 class="blendjet-demo__title-block__title">
          {title} <br />
          <span style="font-size:55%">{subtitle}</span>
        </h1>
        {screenWidth <= 768 && (
          <div>
            <div class="mobile-demo">
              <picture>
                <img
                  src={image?.src}
                  class="mobile-demo__image"
                  alt="BlendJet 2 in Black Color"
                />
              </picture>
            </div>
            <div class="blendjet-demo__title-block__subtitle">
              {description}
            </div>

            <div class="blendjet-demo__mobile-value-props">
              <BlendjetFeatures features={features} />
            </div>
          </div>
        )}
      </div>
      {screenWidth > 768 && (
        <div class="blendjet-demo__display">
          <div class="blendjet-demo__display__animation">
            <img
              class="blendjet-demo__display__animation__img"
              src={image?.src}
              alt="BlendJet 2 in Black Color"
            />
          </div>
          <div class="blendjet-demo__display__value-props">
            <BlendjetFeatures features={features} />
          </div>
        </div>
      )}
      <div class="blendjet-demo__buy-now">
        <a href={buttonLink}>
          <button role="button" class="blendjet-demo__buy-now__button">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
}

function BlendjetFeatures({ features }: ProductFeaturesProps) {
  return (
    <div class="features-container">
      <div class="features-column-1">
        {features.fields.map((field) => {
          return (
            <div class="features-row">
              <div class="features-icon">
                <FeatureIcon name={field.icon} />
              </div>
              <div class="features-text-block">
                <div class="features-text-block__title">{field.title}</div>
                <div class="features-text-block__text">{field.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
