import { hydrate } from 'preact';

declare global {
  interface Window {
    __orly__: (event: any) => void;
  }
}

export function createEntrypoint<Props>(
  featureId: string,
  Component: (props: Props) => preact.JSX.Element,
) {
  return () => {
    const hydrationDataEl = document.getElementById(
      `${featureId}-hydration-data`,
    );
    window.__orly__ &&
      window.__orly__({
        event: 'HYDRATE',
        payload: {
          time: window.performance.now(),
          featureId,
        },
      });
    if (hydrationDataEl) {
      const hydrationData: Props = JSON.parse(
        hydrationDataEl?.textContent ?? '{}',
      );

      hydrate(
        <Component {...hydrationData} />,
        document.getElementById(featureId)!,
      );
    } else {
      // TODO: what's the right way to type this?
      const hydrationData: any = {};
      hydrate(
        <Component {...hydrationData} />,
        document.getElementById(featureId)!,
      );
    }
  };
}
