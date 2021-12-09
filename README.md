# LaunchDarkly Sample React Native Application

We've built a simple application that demonstrates how LaunchDarkly's SDK works. Below, you'll find the basic build procedure, but for more comprehensive instructions, you can visit your [Quickstart page](https://app.launchdarkly.com/quickstart#/).

## Build instructions
1. Open the `hello-react-native` directory
2. Copy the mobile key from your account settings page from your LaunchDarkly dashboard into `App.js`.
3. Run `npx yarn install` to download the dependencies for the application.
4. Platform build requirements:
  * Android requires a debug keystore, and react-native requires it to be local to the application. Before first run generate one by performing:
    ```
    keytool -genkey -v -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000 -dname "cn=Unknown, ou=Unknown, o=Unknown, c=Unknown" -keystore ./android/app/debug.keystore
    ```
  * iOS requires setting up native module dependencies using cocoapods. Run `cd ios; pod install; cd ..` to install native modules for iOS.

## Running

To run the application use `npm run <android|ios>`
