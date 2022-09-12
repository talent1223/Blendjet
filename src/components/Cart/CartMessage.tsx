/** @jsx h */
import { h } from 'preact';

export function CartMessage({ message }: { message: string }) {
  return <div class="cart-message">{message}</div>;
}
