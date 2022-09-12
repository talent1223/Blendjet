/** @jsx h */
import { h } from 'preact';
import './style.scss';

export function Divider({ className }: { className?: string }) {
  return <div className={`divider ${className}`}></div>;
}
