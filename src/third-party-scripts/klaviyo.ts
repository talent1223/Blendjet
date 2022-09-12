import { loadScriptWithDelay, ScriptConfig } from './utils';

export function loadKlaviyo(companyId: string, config?: ScriptConfig) {
  const defaultConfig = {
    src: `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${companyId}`,
    id: 'klaviyo',
    anonymous: false,
    ...config,
  };

  loadScriptWithDelay(defaultConfig);
}

export function loadKlavioSubscribe(config?: ScriptConfig) {
  const defaultConfig = {
    src: 'https://www.klaviyo.com/media/js/public/klaviyo_subscribe.js',
    id: 'klaviyo',
    anonymous: false,
    ...config,
  };

  loadScriptWithDelay(defaultConfig);
}
