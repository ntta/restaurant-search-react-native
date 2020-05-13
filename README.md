# Restaurant Search App

This app can search restaurants in a fixed location by name of the dish and show some photos of the restaurant.
* Written in React Native
* Built with Expo CLI
* Use Yelp API to get restaurant data

<img src="/screenshots/main.jpg" width="200"> <img src="/screenshots/detail.jpg" width="200">

## Installation
* Assuming that you have [Node 12 LTS](https://nodejs.org/en) or greater installed
* Use npm to install the Expo CLI
```
npm install -g expo-cli
```
* Change directory to restaurant-search-react-native, run `npm install` to install all required packages
* Run `npm start` to start metro bundler
* Use Expo Client* ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) / [iOS](https://apps.apple.com/app/apple-store/id982107779)) to scan barcode from the metro bundler

## Snack
Try this app on Snack: https://snack.expo.io/@erron/restaurant-search

## Change location
The fixed location of the app is `melbourne`. To change the location, edit the location param in `src/hooks/useResults.js` line 15.
