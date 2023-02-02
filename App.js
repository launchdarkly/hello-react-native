/**
 * LaunchDarkly Hello React Native App
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

import LDClient from 'launchdarkly-react-native-client-sdk';

const App: () => Node = () => {
  const mobileKey = 'MOBILE_KEY';
  const flagKey = 'my-boolean-flag';

  const [client, setClient] = useState(null);
  const [flagValue, setFlagValue] = useState(null);

  async function evalFlag() {
    let res = await client.boolVariation(flagKey, false);
    if (res != flagValue) {
      setFlagValue(res);
    }
  }

  useEffect(() => {
    async function initializeClient() {
      let ldClient = new LDClient();
      let config = {
        mobileKey: mobileKey,
        application: {
          id: 'hello-ld-rn-app',
          version: '0.0.1',
        },
        debugMode: true,
      };
      let user = { key: 'example-user-key' };
      try {
        await ldClient.configure(config, user);
      } catch (err) {
        console.log(err);
      }
      setClient(ldClient);
    }

    if (mobileKey === '') {
      console.log('Please edit App.js to set mobileKey to your LaunchDarkly mobile key first');
      return;
    }

    if (client == null) {
      initializeClient();
    } else {
      evalFlag();
    }
  });

  return (
    <SafeAreaView>
      <Text>
        Feature flag '{flagKey}' is {JSON.stringify(flagValue)} for this user
      </Text>
    </SafeAreaView>
  );
};

export default App;
