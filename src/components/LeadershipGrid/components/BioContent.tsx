/** @jsx h */
import { h, Fragment } from 'preact';

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { ModalData, FavoriteItem } from '../types';

import './style.scss';

export function BioContent({ data }: { data: ModalData | null }) {
  let { name, title, tag, favorites, image, body } = data
    ? data
    : {
        name: '',
        title: '',
        tag: '',
        favorites: [],
        image: { src: '', alt: '' },
        body: '',
      };
  return (
    <Fragment>
      <div className="bio__content">
        <div className="bio__content__image-container">
          <img
            src={image.src}
            alt={image.alt}
            className="bio__content__image-container__img"
          />
        </div>
        <div className="bio__content__text-container">
          <div className="bio__content__text-container__name">{name}</div>
          <div className="bio__content__text-container__title">{title}</div>
          {tag ? (
            <div className="bio__content__text-container__tag leadership__grid__entry__tag">
              {tag}
            </div>
          ) : null}
          <div
            className="bio__content__text-container__text-block"
            dangerouslySetInnerHTML={{ __html: body ? body : '' }}></div>
        </div>
      </div>
      <div className={favorites && favorites.length ? 'bio__favorites' : ''}>
        {favorites?.map((item: FavoriteItem, index: number) => (
          <div className="bio__favorites__item">
            <div className="bio__favorites__item__category">
              {item.category}:
            </div>
            <a
              href={item.link}
              className="bio__favorites__item__image-container">
              <img
                src={item.image}
                className="bio__favorites__item__image-container__img"
              />
            </a>
            <div className="bio__favories__item__name">{item.name}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
