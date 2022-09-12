import {
  initializeSharedStateStore,
  InitializationData,
} from '../../src/hooks/useSharedState';

const globalStateEl = document.getElementById('global-state');
const globalStateData: InitializationData = JSON.parse(
  globalStateEl?.textContent ?? '{}',
);
initializeSharedStateStore(globalStateData);
