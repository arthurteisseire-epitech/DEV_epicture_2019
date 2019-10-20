# Epicture in react-native

## Documentation
To open full documentation in your browser open ./docs/index.html with your browser, example:


    firefox ./docs/index.html

## Install
- Follow this doc https://facebook.github.io/react-native/docs/getting-started to install
   - node.js
   - react-native
   - android-studio
   - the android emulator
- In addition add "ANDROID_SDK_ROOT=$HOME/Android/Sdk" permanently to your env
- At the root of the project exec the following command (replace $USER by your username):


    echo 'sdk.dir = /home/$USER/Android/Sdk' > ./android/local.properties

- Install adb
- Logout
- Install yarn
- Install yarn dependencies:

    
    yarn install

- Start your emulator
- Start the app with:


    react-native start & ; react-native run-android

- Enjoy the app

## Install on your android phone
- Make sure you did ALL the steps in the Install(above) section
- Enable debug mode on your phone
- Connect your phone to your computer
- Create the .aab (It can take some time):


    cd android && ./gradlew BundleRelease && cd ..

- Install the app on your phone:


    react-native run-android --variant=release

- Enjoy the app

## Dependencies installed
- react-native-image-picker
- react-native-dotenv
- react-native-router-flux
- react-native-webview
- @react-native-community/async-storage

