# README

This project aimed to show top 100 free apps from APP STORE.
<br />All data source come from itunes.apple.com.
<br />This is NOT for commerical usage, ONLY for interest and participate react-native for some basic development.


Steps to compile this react native project:<br />
	1.	Install dependencies http://facebook.github.io/react-native/releases/0.45/docs/getting-started.html#installing-dependencies

	◦	Homebrew
	    ▪	follow instruction on https://brew.sh
	◦	Node
	    ▪	brew install node
	◦	watchman
	    ▪	brew install watchman
	◦	React Native command line interface
	    ▪   npm install -g react-native-cli
	▪	Required component in react
	    ▪	npm install mobx-react --save
	    ▪	npm install --save react-native-event-listeners

	◦	Xcode / android studio (android sdk)
	◦	Our app's Package dependency
	▪	Inside our React Native project folder, Run:
	    ▪	npm install

# Run on iOS simulator

	◦	Inside our React Native project folder, Run:
	◦	react-native run-ios
	◦	iOS Simulator should be launch automatically and our app will be running on it.
	◦	Ref: http://facebook.github.io/react-native/releases/0.45/docs/getting-started.html#running-your-react-native-application

# Run on Android emulator
	◦	First launch your Android Virtual Devices.
	◦	Then run inside our React Native project folder
	◦	react-native run-android
	◦	The app should be running on the emulator.

# Run on iOS devices.

	◦	Open /ios/reactProject.xcworkspace on Xcode
	◦	Click product > run on the menu bar.
	◦	A react packager will be launched (PS: keep it running). The app will be run on the device.
	◦	Ref: http://facebook.github.io/react-native/releases/0.45/docs/running-on-device.html#running-your-app-on-ios-devices

# Run on Android devices
◦	Plug in your device via USB
	◦	Method A:
	▪	Inside our React Native project folder, run
	▪	react-native run-android
	▪	A react packager will be launched (PS: keep it running). The app will be run on the device.
	▪	Ref: http://facebook.github.io/react-native/releases/0.45/docs/running-on-device.html#running-your-app-on-android-devices
	◦	Method B:
	▪	Inside our React Native project folder, run
	▪	react-native start
	▪	A react packager will be launched (PS: keep it running)
	▪	Open /android using android studio
	▪	Click Run > Run 'app' on the menu bar.
