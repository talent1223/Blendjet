/** @jsx h */
import { Fragment, h } from 'preact';
import { useState } from 'react';
import { ImageGridSection } from '../ImageGridSection';
import GridModal from './GridModal';
import './style.scss';
import { ImageGridProps } from './types';

export function ImageGrid({ prefix, data }: ImageGridProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalNdx, setModalNdx] = useState<number>(0);

  const handleDecrease = () => {
    setModalNdx((modalNdx + 3) % 4);
  };
  const handleIncrease = () => {
    setModalNdx((modalNdx + 1) % 4);
  };

  return (
    <Fragment>
      <div className={`${prefix}__image-grid`}>
        {data.map((item, ndx) => (
          <ImageGridSection
            {...item}
            key={`${prefix}-grid-${ndx}`}
            onClick={() => {
              setModalNdx(ndx);
              setShowModal(true);
            }}
          />
        ))}
      </div>
      <GridModal
        show={showModal}
        onClose={() => setShowModal(false)}
        data={data[modalNdx]}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
    </Fragment>
  );
}
