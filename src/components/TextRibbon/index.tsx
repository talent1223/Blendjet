/** @jsx h */
import { h } from 'preact';
import './style.scss';

export interface TextRibbonProps {
  title: string;
  description: string;
  anchor?: string;
  style?: any;
  country?: string;
  displayCountries?: string[];
}

export function TextRibbon({
  anchor,
  style = {},
  title,
  description,
  country,
  displayCountries,
}: TextRibbonProps) {
  if (!displayCountries?.length || displayCountries?.includes(country || '')) {
    return (
      <div className="text-ribbon" id={anchor} style={style}>
        <div className="text-ribbon__content">
          <div className="text-ribbon__content-inner">
            <h2 className="text-ribbon__title">{title}</h2>{' '}
            <div
              className="text-ribbon__description"
              dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
