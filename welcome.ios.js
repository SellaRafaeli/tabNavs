'use strict';
 
var React = require('react-native');
var Page = require('./page.js');
var More = require('./more.ios');

var {
  StyleSheet,
  View,
  Text,
  Component,
  NavigatorIOS
} = React;
 
var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
  }
});
 
class Welcome extends Component {
  render() {
    (
      <NavigatorIOS
  ref="nav"
  style={styles.natigator}
  initialRoute={{
    component: Page,
    title: "hello there",
    rightButtonTitle: 'New Invite',
    onRightButtonPress: () => {
      this.refs.nav.navigator.push({
        title: "test",
        component: Page,
        rightButtonTitle: 'Cancel',
        onRightButtonPress: () => { this.refs.nav.navigator.pop(); }
      });}
  }}/>
    );
  }
_handleBackButtonPress() {
    this.props.navigator.pop();
  }
  _handleNextButtonPress() {
    this.props.navigator.push(nextRoute);
  }
  renderN() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Welcome to your React Native Start Component 2!
        </Text>
      </View>
    );
  }
}
 
module.exports = Welcome;