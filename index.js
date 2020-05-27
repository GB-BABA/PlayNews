/* eslint-disable prettier/prettier */
/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

const persistor = getPersistor();

AppRegistry.registerComponent(appName, () => App);

const Root = () => {
    <PersistGate persistor={persistor}>
        <App />
    </PersistGate>;
};
