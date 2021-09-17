### LaunchDarkly Sample React Native Application

We've built a simple application that demonstrates how LaunchDarkly's SDK works. Below, you'll find the basic build procedure, but for more comprehensive instructions, you can visit your [Quickstart page](https://app.launchdarkly.com/quickstart#/).

#### Build instructions
1. Open the `hello-react-native` directory
2. Copy the mobile key from your account settings page from your LaunchDarkly dashboard into `App.js`.
3. Run `npx yarn install` to download the dependencies for the application.
4. Run `npx react-native start` to start the server to deliver the bundle url. Make sure this is running before you start your application.

##### iOS specific build instructions
First, run `pod install` in the `ios` directory. Then either run the application by opening the `ios` directory in Xcode, or start a simulator and run `npx react-native run-ios` from the project root directory.

##### Android specific build instructions
Either run the application by opening the `android` directory in Android Studio, or start an emulator and run `npx react-native run-android`.
