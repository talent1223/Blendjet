export type ScriptConfig = {
  src: string;
  id: string;
  timeout?: number;
  anonymous: boolean;
  reload?: boolean;
  useRequestIdleCallback?: boolean;
  addProperties?: (script: HTMLScriptElement) => void;
};

declare global {
  interface Window {
    scriptDelayTime: number;
  }
}

const timeoutIds: { [key: string]: number } = {};

export function loadScript(config: ScriptConfig, callback = () => {}) {
  const { src, id, anonymous = true } = config;

  // if there is a setTimeout running for this script, clear it
  // this may occur when user interactions require the script to be loaded sooner
  if (timeoutIds[src]) {
    window.clearTimeout(timeoutIds[src]);
  }

  // check if the script has already been loaded, if so do nothing
  const foundScript = document.getElementById(id) as HTMLScriptElement;
  if (foundScript) {
    if (config.reload && foundScript.src != src) {
      // Remove script element if src differs and reload was requested
      foundScript.remove();
    }
  }

  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  script.id = id;
  if (anonymous) {
    script.crossOrigin = 'anonymous';
  }
  if (config.addProperties) {
    config.addProperties(script);
  }

  // A lot of the scripts have the same timeout, so use requestIdleCallback
  // to callback when idle and avoid overloading main thread.
  script.onload =
    typeof window.requestIdleCallback === 'function'
      ? () => window.requestIdleCallback(callback)
      : callback;
  document.body.append(script);
}

export function loadScriptWithDelay(config: ScriptConfig, callback = () => {}) {
  const { src, id } = config;

  // check if the script has already been loaded, if so callback right away
  if (document.getElementById(id)) {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(callback);
    } else {
      window.setTimeout(callback, 0);
    }
    return;
  }

  if (
    config.useRequestIdleCallback &&
    typeof window.requestIdleCallback === 'function'
  ) {
    // load this in a lull period
    window.requestIdleCallback(() => loadScript(config, callback));
  } else {
    // window.scriptDelayTime let's us control this from edge, if desired
    const timeout = config.timeout || window.scriptDelayTime || 1;
    timeoutIds[src] = window.setTimeout(loadScript, timeout, config, callback);
  }
}
