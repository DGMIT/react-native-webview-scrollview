import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View,
  ScrollView, WebView,
  Dimensions,
} from 'react-native';

const { width,height } = Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {enableScrollViewScroll: true};
  }

  renderWebView(pURI) {
    return (
      <View
        onStartShouldSetResponderCapture={() => {
          this.setState({ enableScrollViewScroll: false });
          if (this._myScroll.contentOffset === 0
            && this.state.enableScrollViewScroll === false) {
            this.setState({ enableScrollViewScroll: true });
          }
        }}>
        <Text>Test Label </Text>
        <WebView
          source={{uri: pURI}}
          style={{height: 200, margin:50}}
        />
      </View>
    );
  }

  render() {
    return (
      <View
        onStartShouldSetResponderCapture={() => {
          this.setState({ enableScrollViewScroll: true });
      }}>
      <ScrollView
        scrollEnabled={this.state.enableScrollViewScroll}
        ref={myScroll => (this._myScroll = myScroll)}>
          {this.renderWebView('https://www.google.com')}
          {this.renderWebView('https://www.google.com')}
          {this.renderWebView('https://www.google.com')}
          {this.renderWebView('https://www.google.com')}
          {this.renderWebView('https://www.google.com')}
          {this.renderWebView('https://www.google.com')}
      </ScrollView>
      </View>

    );
  }
}
