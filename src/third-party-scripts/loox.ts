import { loadScriptWithDelay, ScriptConfig } from './utils';

export function loadLoox(shopName: string, config?: ScriptConfig) {
  const defaultConfig = {
    src: `https://loox.io/widget/loox.js?shop=${shopName}.myshopify.com`,
    id: 'loox',
    anonymous: false,
    ...config,
  };

  loadScriptWithDelay(defaultConfig);
}
