import { loadScriptWithDelay, ScriptConfig } from './utils';

export function loadRecart(siteId: string, config?: ScriptConfig) {
  const defaultConfig = {
    src: `https://cdn.ghostmonitor.com/recart-loader.js?siteId=${siteId}&storefront=nacelle`,
    id: 'recart',
    anonymous: false,
    ...config,
  };

  loadScriptWithDelay(defaultConfig);
}
