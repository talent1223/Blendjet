/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { cx } from '../../lib/utils';

export interface CurtainProps {
  show: boolean;
  curtainClose?: boolean;
  onClose: () => void;
  curtainColor?: 'white' | 'black';
}

export function Curtain({
  curtainClose = true,
  onClose,
  show,
  curtainColor = 'white',
}: CurtainProps) {
  return (
    <div
      class={cx('curtain', show && 'curtain-show', `curtain-${curtainColor}`)}
      onClick={curtainClose ? () => onClose() : () => {}}></div>
  );
}
