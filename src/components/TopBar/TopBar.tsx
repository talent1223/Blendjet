/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from 'preact';
import './style.scss';

export type TopBarProps = {
  freeShippingMessage: string;
};

declare global {
  interface Window {
    UserWay: any;
  }
}

let loaderRun = false;
function loadUseway() {
  // only load the first time this is clicked
  if (loaderRun) return;
  loaderRun = true;
  var s = document.createElement('script');
  /* uncomment the following line to override default position */
  /* s.setAttribute("data-position", 3); */
  /* uncomment the following line to override default size (values: small, large) */
  /* s.setAttribute("data-size", "small"); */
  /* uncomment the following line to override default language (e.g., fr, de, es, he, nl, etc.) */
  /* s.setAttribute("data-language", "language"); */
  /* uncomment the following line to override color set via widget (e.g., #053f67) */
  /* s.setAttribute("data-color", "#053e67"); */
  /* uncomment the following line to override type set via widget (1=person, 2=chair, 3=eye, 4=text) */
  /* s.setAttribute("data-type", "1"); */
  /* s.setAttribute("data-statement_text:", "Our Accessibility Statement"); */
  /* s.setAttribute("data-statement_url", "http://www.example.com/accessibility")"; */
  /* uncomment the following line to override support on mobile devices */
  /* s.setAttribute("data-mobile", true); */
  /* uncomment the following line to set custom trigger action for accessibility menu */
  s.setAttribute('data-trigger', 'accessibilityWidget');
  s.setAttribute('data-account', 'rGS1KpZP6i');
  s.setAttribute('src', 'https://cdn.userway.org/widget.js');
  (document.body || document.head).appendChild(s);

  // userway docs: https://userway.org/docs#events
  document.addEventListener('userway:init_completed', function (event: any) {
    var instance = event.detail.userWayInstance;
    instance.widgetOpen();
  });
}

export function TopBar({ freeShippingMessage }: TopBarProps) {
  return (
    <div data-label="top-bar" class="free-shipping-banner">
      {/* <img id="accessibilityWidget" class="useway-icon" src="/images/body_wh.svg" /> */}
      <AccessibilityIcon />
      <span class="free-shipping-banner__text">{freeShippingMessage}</span>
    </div>
  );
}

function AccessibilityIcon() {
  return (
    <svg
      id="accessibilityWidget"
      onClick={loadUseway}
      class="useway-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 63 63">
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: `.a,.b{fill:#fff;}.b{opacity:0.85;}`,
          }}
        />
      </defs>
      <title>Asset 10</title>
      <circle
        class="a"
        cx="31.49"
        cy="16.08"
        r="5.5"
        transform="translate(-2.14 26.98) rotate(-45)"
      />
      <path
        class="a"
        d="M47.62,22.28a88.73,88.73,0,0,1-32.25,0,1.63,1.63,0,0,0-1.92,1.32,1.64,1.64,0,0,0,1.32,1.92,92,92,0,0,0,10.92,1.34,2.62,2.62,0,0,1,2.42,2.93l-.32,2.75a54.14,54.14,0,0,1-3,12.67l-2,5.35a1.65,1.65,0,0,0,3.09,1.16v0l.49-1c1.6-3.41,3.09-6.9,4.45-10.43a.74.74,0,0,1,1.38,0c1.36,3.53,2.85,7,4.45,10.44l.51,1.09h0a1.64,1.64,0,0,0,1.48,1,1.6,1.6,0,0,0,.57-.11,1.64,1.64,0,0,0,1-2.12l-2-5.35a54.67,54.67,0,0,1-3-12.67l-.31-2.77a2.61,2.61,0,0,1,2.42-2.91,92.51,92.51,0,0,0,10.83-1.32,1.73,1.73,0,0,0,1.44-1.67A1.65,1.65,0,0,0,47.62,22.28Z"
      />
      <path
        class="b"
        d="M31.5,0A31.5,31.5,0,1,0,63,31.5,31.53,31.53,0,0,0,31.5,0Zm0,60A28.5,28.5,0,1,1,60,31.5,28.54,28.54,0,0,1,31.5,60Z"
      />
    </svg>
  );
}
