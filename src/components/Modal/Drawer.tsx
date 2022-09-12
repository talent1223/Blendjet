/** @jsx h */
import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { ComponentChildren } from 'preact';
import { Curtain, CurtainProps } from './Curtain';
import { hideScrollbar, restoreScrollbar } from './modalUtils';
import { Portal } from './Portal';
import { cx } from '../../lib/utils';
import './style.scss';

interface DrawerProps extends CurtainProps {
  width: string | number;
  showCloseBtn?: boolean;
  alignment?: 'left' | 'right';
  children: ComponentChildren;
}

/**
 * Drawer is a wrapper for content that opens from one edge of the viewport. Can
 * be top, bottom, left, or right. Similar to a Modal, it provides a translucent
 * curtain and an optional Close button. Uses a Portal so that the drawer is
 * placed in the DOM inside `<div id="portal">` as a sibling to `<div
 * id="app">`.
 */
export function Drawer({
  show,
  width,
  curtainClose = true,
  onClose,
  alignment = 'left',
  children,
  curtainColor = 'white',
}: DrawerProps) {
  // Every time `show` changes: either hide or restore the scroll bar
  useEffect(() => {
    if (show) {
      hideScrollbar();
    } else {
      restoreScrollbar();
    }
  }, [show]);

  return (
    <Portal>
      <div class={`drawer align-${alignment}`}>
        <Curtain
          show={show}
          onClose={onClose}
          curtainClose={curtainClose}
          curtainColor={curtainColor}
        />
        <div
          class={cx('drawer-content', show && 'drawer-show')}
          style={{ width: width }}
          onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
}
