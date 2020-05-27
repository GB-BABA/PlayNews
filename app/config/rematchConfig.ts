import {init} from '@rematch/core';
import * as models from './models';
import createRematchPersist from '@rematch/persist';

const persistPlugin = createRematchPersist({
  whitelist: ['modelName1'],
  throttle: 5000,
  version: 1,
});

const store = init({
  models,
  plugins: [persistPlugin],
});

export default store;
