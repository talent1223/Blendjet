/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { cx } from '../../lib/utils';

export type HomeRecipesProps = {
  buttonText: string;
  buttonLink: string;
  videoObj: {
    src: string;
  };
};

export function HomeRecipes({
  buttonText,
  buttonLink,
  videoObj,
}: HomeRecipesProps) {
  return (
    <div class="section section__recipes">
      <div class="section__recipes__list">
        <RecipesList />
      </div>
      <div class="section__recipes__explore">
        <div class="section__recipes__explore__container">
          <video
            class="section__recipes__explore__image"
            autoPlay={true}
            loop={true}
            muted={true}
            webkit-playsinline=""
            playsInline={true}>
            <source src={videoObj.src} type="video/mp4" />
          </video>
          <div class="section__recipes__explore__content">
            <div class="section__recipes__explore__content__text">
              Blend
              <div class="section__recipes__explore__content__text__line2">
                Endlessly
              </div>
            </div>
            <a
              href={buttonLink}
              class="section__recipes__explore__content__cta-button">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  function RecipesList() {
    return (
      <div class="recipe-container">
        <div class="heading">Never. Ending. Blending.</div>
        <div class="list-container">
          <div class="list-wrapper">
            <ul class="list">
              <li>
                <a>Smoothies</a>
              </li>
              <li>
                <a>Shakes</a>
              </li>
              <li>
                <a>Cocktails</a>
              </li>
              <li>
                <a>Dips</a>
              </li>
              <li>
                <a>Mousse</a>
              </li>
              <li>
                <a>Dressings</a>
              </li>
              <li>
                <a>Juices</a>
              </li>
              <li>
                <a>Pasta Sauce</a>
              </li>
              <li>
                <a>Toppings</a>
              </li>
              <li>
                <a>Desserts</a>
              </li>

              <li>
                <a aria-hidden="true">Smoothies</a>
              </li>
              <li>
                <a aria-hidden="true">Shakes</a>
              </li>
              <li>
                <a aria-hidden="true">Cocktails</a>
              </li>
              <li>
                <a aria-hidden="true">Dips</a>
              </li>
              <li>
                <a aria-hidden="true">Mousse</a>
              </li>
              <li>
                <a aria-hidden="true">Dressings</a>
              </li>
              <li>
                <a aria-hidden="true">Juices</a>
              </li>
              <li>
                <a aria-hidden="true">Pasta Sauce</a>
              </li>
              <li>
                <a aria-hidden="true">Toppings</a>
              </li>
              <li>
                <a aria-hidden="true">Desserts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
