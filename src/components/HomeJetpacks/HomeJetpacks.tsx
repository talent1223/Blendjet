/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { ProductCard, ProductCardProps } from '../ProductSlider/ProductCard';
import { ProductSlider } from '../ProductSlider/ProductSlider';
import { TabSelector } from '../MobileCartUpsells/TabSelector';
import { useState, useEffect } from 'preact/hooks';
export type HomeJetpacksProps = {
  title: string;
  subtitle: string;
  tabLabels: string[];
  products: Array<ProductCardProps[]>;
  screenWidth: number;
};

export function HomeJetpacks({
  title,
  subtitle,
  products,
  screenWidth,
  tabLabels,
}: HomeJetpacksProps) {
  const [activeProductIndex, setActiveProductIndex] = useState<number>(0);
  const [homeJetpackType, setHomeJetpackType] = useState<ProductCardProps[]>(
    products[activeProductIndex],
  );

  const [imageIndex, setImageIndex] = useState<number>(1);
  // Set up to rotate the smoothie product images

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = (imageIndex + 1) % products.length;
      if (newIndex === 0) {
        newIndex++;
      }
      setImageIndex(newIndex);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div class="home-jetpacks">
      <div class="title-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="197"
          height="49"
          viewBox="0 0 197 49">
          <defs>
            <filter id="vp4rw77pva">
              <feColorMatrix
                in="SourceGraphic"
                values="0 0 0 0 0.215686 0 0 0 0 0.215686 0 0 0 0 0.584314 0 0 0 1.000000 0"
              />
            </filter>
            <path
              id="3nr89l9qzb"
              d="M1.155 0.38L21.663 0.38 21.663 37.079 1.155 37.079z"
            />
          </defs>
          <g fill="none" fill-rule="evenodd" transform="translate(-622 -47)">
            <g>
              <path
                fill="#373795"
                d="M178.313 48.62c2.26 0 4.318-1.951 4.318-4.265 0-2.105-1.593-3.753-3.802-3.753-2.315 0-4.268 2.16-4.268 4.217 0 2.054 1.594 3.801 3.752 3.801"
                transform="rotate(180 409.5 48)"
              />
              <g transform="rotate(180 409.5 48) translate(175 .287)">
                <path
                  fill="#373795"
                  d="M13.287 9.682c.255-1.593 1.13-2.518 2.568-2.518 1.132 0 1.643.412 2.003.822l3.805-5.242c-.618-.719-2.313-2.365-6.27-2.365-4.113 0-8.226 2.776-9.253 8.123L1.155 37.08h7.298l4.834-27.397z"
                  mask="url(#o77xcsvq1c)"
                />
              </g>
              <path
                fill="#373795"
                d="M153.023 27.137h12.232c-.977 2.725-3.445 5.139-7.247 5.139-3.957 0-5.037-2.98-4.985-4.779v-.36zm4.319 10.947c8.991 0 15.52-8.017 15.52-16.242 0-6.785-4.986-11.101-11.359-11.101-6.425 0-10.278 3.238-12.695 7.556l5.757 1.799c.77-1.335 2.825-3.392 6.168-3.392 3.442 0 5.448 2.312 5.499 4.985 0 .153-.05.308-.05.463h-18.66l-.41 2.465c-.206 1.029-.257 2.004-.257 2.982 0 6.27 3.908 10.485 10.487 10.485zM131.068 30.991h-6.116l-1.13 6.376h6.115l-1.18 6.73h7.296l1.184-6.73h4.318l1.13-6.375h-4.317l2.107-11.874c.102-.615.153-1.131.153-1.696 0-3.959-2.465-6.68-6.68-6.68-3.855 0-6.116 1.336-7.145 2.26l2.159 5.398c.513-.413 1.283-.873 2.363-.873 1.182 0 1.747.614 1.747 1.694 0 .207 0 .514-.05.719l-1.954 11.051zM108.038 17.32c3.136 0 5.243 2.158 5.243 5.5 0 4.113-3.032 8.686-7.76 8.686-3.137 0-5.347-2.263-5.347-5.603 0-4.52 3.597-8.583 7.864-8.583m-4.472 20.765c4.163 0 6.732-2.16 8.12-3.545l.465 2.826h5.963l6.37-35.98h-7.296l-2.314 12.799c-.873-1.542-3.29-3.444-7.041-3.444-9.149 0-15.059 8.532-15.059 16.037 0 6.63 4.624 11.307 10.792 11.307M77.142 17.32c3.187 0 5.346 2.26 5.346 5.601 0 4.575-3.547 8.585-7.812 8.585-3.133 0-5.243-2.16-5.243-5.5 0-4.111 2.981-8.686 7.71-8.686zM67.79 34.643c.873 1.54 3.288 3.442 7.042 3.442 9.198 0 15.058-8.53 15.058-15.985 0-6.682-4.625-11.359-10.742-11.359-4.213 0-6.785 2.159-8.171 3.599l-.463-2.88h-5.964l-4.523 25.906h7.3l.463-2.723zM42.442 31.3c-2.518 0-4.165-1.387-4.522-3.753l-6.94 2.159c.615 4.781 4.884 8.378 10.589 8.378 9.816 0 15.776-7.915 15.776-15.778 0-6.785-4.933-11.565-11.666-11.565-5.6 0-10.074 2.982-12.592 7.865l6.218 2.21c1.234-2.108 3.187-3.29 5.604-3.29 3.188 0 5.191 2.107 5.191 5.343 0 3.96-2.828 8.43-7.658 8.43M9.026 37.367L18.124 29.194 14.887 47.44 22.184 47.44 28.557 11.46 21.261 11.46 19.821 19.683 17.302 21.947 11.856 11.46 3.682 11.46 11.597 27.085.186 37.367z"
                transform="rotate(180 409.5 48)"
              />
            </g>
          </g>
        </svg>
      </div>
      <div class="title-container__subheading">{subtitle}</div>
      <div class="jetpack-tabs">
        <TabSelector
          activeIndex={activeProductIndex}
          onChange={(value) => {
            setActiveProductIndex(tabLabels.indexOf(value));
            setHomeJetpackType(products[tabLabels.indexOf(value)]);
          }}
          tabLabels={tabLabels}
          title={'Select'}
        />
      </div>
      <ProductSlider
        key={activeProductIndex}
        total={homeJetpackType.length}
        screenWidth={screenWidth}>
        {homeJetpackType.map((item, i) => {
          if (item.sku === 'variety-pack') {
            return (
              <div class="keen-slider__slide">
                {homeJetpackType.map((newItem, index) => {
                  if (newItem.sku !== 'variety-pack') {
                    return (
                      <div
                        style={`display: ${
                          imageIndex === index ? 'block' : 'none'
                        }`}>
                        <ProductCard
                          key={i}
                          {...newItem}
                          displayName={item.displayName}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            );
          } else {
            return (
              <div class="keen-slider__slide">
                <div>
                  <ProductCard key={i} {...item} />
                </div>
              </div>
            );
          }
        })}
      </ProductSlider>
    </div>
  );
}
