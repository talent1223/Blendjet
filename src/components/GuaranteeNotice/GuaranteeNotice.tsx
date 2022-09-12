/** @jsx h */
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { Modal } from '../Modal/Modal';
import './style.scss';

function GuaranteeIcon({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 89 89" width={size} height={size}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="98.733%" id="a">
          <stop stop-color="#1e90bb" offset="0%" />
          <stop stop-color="#373795" offset="100%" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="m44.5 0-7.78 5.3-9.26-1.91-5.17 7.91-9.26 1.74-1.74 9.26-7.91 5.17 1.91 9.26-5.29 7.77 5.3 7.78-1.91 9.26 7.91 5.17 1.74 9.26 9.26 1.74 5.17 7.91 9.26-1.91 7.77 5.29 7.78-5.3 9.26 1.91 5.17-7.91 9.26-1.74 1.74-9.26 7.91-5.17-1.91-9.26 5.29-7.77-5.3-7.78 1.91-9.26-7.91-5.17-1.74-9.26-9.26-1.74-5.17-7.91-9.26 1.91-7.77-5.29zm0 11c18.47 0 33.5 15.03 33.5 33.5 0 18.47-15.03 33.5-33.5 33.5-18.47 0-33.5-15.03-33.5-33.5 0-18.47 15.03-33.5 33.5-33.5zm0 4c-16.33 0-29.5 13.17-29.5 29.5 0 16.33 13.17 29.5 29.5 29.5 16.33 0 29.5-13.17 29.5-29.5 0-16.33-13.17-29.5-29.5-29.5z"
      />
      <path
        fill="#fff"
        d="M36.79 45c3.46 0 5.98-2.35 5.98-5.57 0-3.15-1.98-4.87-4.36-5.15l3.27-3.29v-2.64h-10.11v2.63h6.74l-4.08 3.96 1.46 1.73a3.8 3.8 0 011.11-.19c1.89 0 3.11 1.26 3.11 2.94s-1.3 2.94-3.11 2.94c-1.81 0-3.08-1.33-3.15-2.96l-2.64.77c.06 2.61 2.34 4.83 5.78 4.83zm14.11-.02c4.22 0 6.1-3.78 6.1-8.51 0-4.72-1.93-8.47-6.12-8.47-4.24 0-6.17 3.75-6.17 8.46 0 4.78 1.93 8.51 6.19 8.51zm0-2.63c-2.35 0-3.32-2.45-3.32-5.85 0-3.31.96-5.85 3.3-5.85 2.28 0 3.25 2.54 3.25 5.85 0 3.4-.97 5.85-3.23 5.85zM34.41 59c2.8 0 4.65-2.09 4.65-5.01 0-2.76-1.53-4.99-4.69-4.99h-3.37v10h3.41zm-.06-1.57h-1.67v-6.86h1.54c2.48 0 3.13 1.63 3.13 3.4 0 1.7-.73 3.46-3.01 3.46zm7.39 1.57.81-2.24h3.97l.8 2.24h1.73l-3.63-10h-1.78l-3.63 10h1.73zm4.2-3.81h-2.83l1.42-3.93 1.42 3.93zm8.68 3.81v-3.9l3.38-6.1h-1.86l-2.37 4.36-2.36-4.36h-1.86l3.37 6.1v3.9h1.69z"
      />
    </svg>
  );
}

function GuaranteeModal() {
  return (
    <div class="guarantee-modal__container">
      <GuaranteeIcon size={89} />
      <div class="guarantee-modal__container__heading">
        30-day Money Back Guarantee
      </div>
      <div class="guarantee-modal__container__text">
        We believe in 100% customer satisfaction and that is why we are offering
        all customers a 30 day money-back guarantee! If you are not satisfied
        with your BlendJet blender, you may return the item within 30 days from
        the order date for a full refund. If you don't like your product, get a
        full refund within 30 days, no questions asked. <br />
        — <br />
        Please{' '}
        <a class="guarantee-modal__container__text__contact-link">
          contact our customer happiness
        </a>{' '}
        team to start your return process.
      </div>
    </div>
  );
}

export function GuaranteeNotice() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Fragment>
      <div
        class="product-select__controls__value-props"
        onClick={() => setShowModal(true)}>
        <div class="product-select__controls__value-props__guarantee">
          <GuaranteeIcon size={40} />
          <span class="product-select__controls__value-props__guarantee__text">
            30 day money back guarantee
          </span>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <GuaranteeModal />
      </Modal>
    </Fragment>
  );
}
