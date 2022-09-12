/** @jsx h */
import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { hideScrollbar, restoreScrollbar } from './modalUtils';
import { ComponentChildren } from 'preact';
import { Curtain, CurtainProps } from './Curtain';
import { Portal } from './Portal';
import { CloseButton } from './CloseButton';
import { cx } from '../../lib/utils';
import './style.scss';

interface ModalProps extends CurtainProps {
  showCloseBtn?: boolean;
  children: ComponentChildren;
  className?: string;
}

export function Modal({
  show,
  showCloseBtn = true,
  curtainClose = true,
  onClose,
  children,
  className = '',
  curtainColor = 'black',
}: ModalProps) {
  useEffect(() => {
    if (show) {
      hideScrollbar();
    } else {
      restoreScrollbar();
    }
  }, [show]);

  return (
    <Portal>
      <div class={`modal ${className}`}>
        <Curtain
          show={show}
          onClose={onClose}
          curtainClose={curtainClose}
          curtainColor={curtainColor}
        />
        <div
          class={cx('modal-container', show && 'modal-show')}
          onClick={(e) => e.stopPropagation()}>
          <div class="modal-header">
            {showCloseBtn && <CloseButton onClick={onClose} />}
          </div>
          <div class="modal-content">{children}</div>
        </div>
      </div>
    </Portal>
  );
}
