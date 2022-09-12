declare global {
  interface Window {
    __capi__: {
      metafields: { key: string; value: string }[];
    };
  }
}

export function getOutsmartlyMetafields() {
  return typeof window !== 'undefined' &&
    window.__capi__ &&
    Array.isArray(window.__capi__.metafields)
    ? window.__capi__.metafields
    : [];
}
