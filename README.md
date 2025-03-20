## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js (v18 or newer)**: [Download Node.js](https://nodejs.org/en/download/package-manager/)
- **npm (v10.7 or newer)**: [Download npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- **Java Development Kit (JDK) - v17**: [Download JDK](https://openjdk.org/)
- **Android development environment**: See [Setup Android Development Environment](#setup-android-development-environment)

For detailed instructions, refer to the [React Native documentation](https://reactnative.dev/docs/set-up-your-environment).

## Setup Android Development Environment

1. **Install Android Studio**: [Download Android Studio](https://developer.android.com/studio/index.html)
2. **Install Android SDK (v14 - UpsideDownCake - API level 34)**:
   - Open Android Studio
   - Go to `SDK Manager`
   - Install Android SDK version 14 (UpsideDownCake)

For more information, refer to the [React Native documentation](https://reactnative.dev/docs/set-up-your-environment).

## Preparing the Android device

To run this React Native app, you'll need an Android device. You can use either a physical device or an Android Virtual Device (emulator).

1. **Using a Physical Device**

   1. Connect your Android device to your computer via USB.
   2. Enable Developer Options on your device:
      - Go to **Settings** > **About Phone**.
      - Tap **Build Number** seven times to enable Developer Options.
   3. Turn on USB Debugging:
      - Go to **Settings** > **Developer Options**.
      - Toggle on **USB Debugging**.

   For more detailed instructions, visit the [React Native documentation](https://reactnative.dev/docs/running-on-device).

2. **Using Emulator**

   - Follow the steps below to set up an Android Virtual Device (AVD) emulator:

     1. Open Android Studio.
     2. Go to **More Actions**.
     3. Select **Virtual Device Manager**.
     4. Click on **Create Virtual Device**.
     5. Choose a device definition and click **Next**.
     6. Select a system image (recommended **API Level 34**) and click **Next**.
     7. Configure the AVD options and click **Finish**.

   Once the emulator is set up, you can launch it and run your React Native app.

   For more detailed instructions, visit the [Android Developer documentation](https://developer.android.com/studio/run/managing-avds.html).

## Running the Application

To run the application, follow these steps:

- **Step 1:** Install the dependencies by running `npm i --legacy-peer-deps`. 
> Note: Using `--legacy-peer-deps` to bypass peer dependency warnings.
- **Step 2:** Start the development server with `npm start`. (If you want to start with a clean cache, run `npm start -- --reset-cache`.)
- **Step 3:** Open the application in Android by pressing 'a' (either in an emulator or on a physical device).
- **Step 4:** Once the terminal displays "Build Successful," the application is running.