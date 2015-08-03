'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableHighlight
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
    backgroundColor: '#765432',
  }
});
 
class Page extends Component {
  constructor() {
    super()
    this.state = {
            a: 'mooga'
        };
  }


  render() {
    var b = this.props.b+1 || "bla";
    return (
      <View style={styles.container}>
        <TouchableHighlight
                  onPress={() => { 
                    console.log("yab"); 
                    var nav = this.props.navigator;
                    nav.push({
                      title: "another "+b,
                      component: Page,
                      passProps: {b:b, a:11},
                      rightButtonTitle: 'Do-Cancel '+b,
                      onRightButtonPress: () => { nav.pop(); }
                    });
                    
                  }}>        
        <Text style={styles.description}>
          {this.state.a}
          {b}
        </Text>
        </TouchableHighlight>
        
      </View>
    );
  }
}
 
module.exports = Page;