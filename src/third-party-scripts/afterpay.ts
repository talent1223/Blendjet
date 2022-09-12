import { loadScript, ScriptConfig } from './utils';

export function loadAfterpay(config?: ScriptConfig) {
  const defaultConfig = {
    src: `https://js.afterpay.com/afterpay-1.x.js`,
    id: 'afterpay',
    anonymous: false,
    addProperties: (script: HTMLScriptElement) => {
      script.setAttribute('data-analytics-enabled', '');
    },
    ...config,
  };

  loadScript(defaultConfig);
}
