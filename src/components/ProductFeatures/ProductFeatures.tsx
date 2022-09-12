/** @jsx h */
import { h } from 'preact';
import { FeatureIcon, FeatureIconName } from './FeatureIcon';
import './style.scss';

export interface Features {
  title: string;
  subtitle?: string;
  fields: { icon: FeatureIconName; title: string; description: string }[];
}

export interface ProductFeaturesProps {
  features: Features;
  rowCount?: number;
}

export function ProductFeatures({
  features,
  rowCount = 1,
}: ProductFeaturesProps) {
  return (
    <div class="media-content__main__features">
      {features.fields && (
        <div class="features-container sticky">
          <div class="features-column">
            <div class="features-heading">{features.title}</div>
            {features.subtitle ? (
              <div class="features-text">
                <p>{features.subtitle}</p>
              </div>
            ) : null}
            <div className={rowCount == 2 ? 'features-wrapper' : ''}>
              {features.fields.map((field, i) => (
                <div class="features-row" key={i}>
                  <div class="features-icon">
                    <FeatureIcon name={field.icon} />
                  </div>
                  <div class="features-text-block">
                    <div class="features-text-block__title">{field.title}</div>
                    <div
                      class="features-text-block__text"
                      dangerouslySetInnerHTML={{ __html: field.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
