'use strict';
//var Icon = require('react-native-icons'); 
var React = require('react-native');


var {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableHighlight
} = React;
 
var Icon = require('react-native-vector-icons/FontAwesome');

var myIcon = (<Icon name="rocket" size={100} color="#900" />)
debugger
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

//var Icon = require('react-native-icons');

class Page extends Component {
  constructor() {
    super()
    this.state = {
            a: 'mooga'
        };
  }


  render() {
    var b = this.props.b+1 || "bla";
    var Icon = require('react-native-icons');
    return (
      <View>
      {myIcon}
      </View>
    );
  }
}
 
module.exports = Page;