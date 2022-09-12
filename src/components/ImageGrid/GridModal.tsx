/** @jsx h */
import { h } from 'preact';
import './grid.scss';
import { ImageGridSectionProps } from './types';
import { Modal } from '../Modal/Modal';
import { NextIcon, PreviousIcon } from '../Icons/icons';
export default function GridModal({
  show,
  onClose,
  data,
  handleDecrease,
  handleIncrease,
}: {
  show: boolean;
  onClose: () => void;
  data: ImageGridSectionProps;
  handleDecrease: () => void;
  handleIncrease: () => void;
}) {
  return (
    <Modal show={show} onClose={onClose} className="image-grid-modal">
      <div class="drive__container">
        <div slot="top-right">
          <div data-v-5a0080f2="" class="close-container"></div>
        </div>
        <div class="drive__decrement">
          <div class="svg-container" onClick={handleDecrease}>
            <PreviousIcon />
          </div>
        </div>
        <div class="drive__image-container">
          <img {...data.image} />
        </div>
        <div class="drive__increment">
          <div class="svg-container" onClick={handleIncrease}>
            <NextIcon />
          </div>
        </div>
        <div class="drive__text-container">
          <div class="drive__text-container__heading">{data.title}</div>
          <div class="drive__text-container__main">
            <p>{data.text}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
