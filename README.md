# This example is deprecated

This repository contains an example for the `launchdarkly-react-native-client` SDK, which has been replaced by the `@launchdarkly/react-native-client` SDK.

For examples using the `@launchdarkly/react-native-client` version of the SDK please refer to the react-native SDK in the (js-core repository)[https://github.com/launchdarkly/js-core].

# LaunchDarkly Sample React Native Application

We've built a simple application that demonstrates how LaunchDarkly's SDK works. Below, you'll find the basic build procedure, but for more comprehensive instructions, you can visit your [Quickstart page](https://app.launchdarkly.com/quickstart#/).

## Build instructions

1. Open the `hello-react-native` directory
2. Copy the mobile key from your account settings page from your LaunchDarkly dashboard into `App.js`.
3. Set flagKey to a valid flag key in your project/environment.
4. Run `yarn` to install dependencies.
5. For iOS, set up the native module dependencies by running `npx pod-install`.

## Running

To run the application use `yarn <android|ios>`
