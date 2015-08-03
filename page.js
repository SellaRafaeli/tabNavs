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
    debugger
    this.state = {
            a: 'mooga'
        };
  }


  render() {
    debugger
    var b = this.props.b || "bla";
    return (
      <View style={styles.container}>
        <TouchableHighlight
                  onPress={() => { 
                    console.log("yab"); 
                    debugger
                    console.log(this); 
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