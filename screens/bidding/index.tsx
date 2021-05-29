import * as React from 'react';
import WebView from 'react-native-webview';

export default function BiddingScreen() {

  return (
    <WebView
      source={{uri: 'https://amazon.com/'}}
    />
  );
}