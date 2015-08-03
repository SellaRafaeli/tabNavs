'use strict';

var React = require('react-native');
var {
  NavigatorIOS,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} = React;
var Icon = require('react-native-vector-icons/FontAwesome');

//var TabBarItemIOS = TabBarIOS.Item;
var TabBarItemIOS = Icon.TabBarItem;


//var Search = require("./Search");
//var Invites = require("./Invites");
var Page = require("./page");
//var Icon = require('react-native-icons');
var EmptyPage = React.createClass({

  render: function() {
    return (
      <View style={styles.emptyPage}>
      <Text style={styles.emptyPageText}>
      {this.props.text}
      </Text>
      </View>
      );
  },

});

var TabBarExample = React.createClass({

  statics: {
    title: '<yes.no home tabs>'
    //description: 'Tab-based navigation.'
  },

  getInitialState: function() {
    return {
      selectedTab: 'blueTab',
      notifCount: 0,
      presses: 0,
    };
  },

  render: function() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        
        <TabBarItemIOS
        name="blueTab"
        zicon={_ix_DEPRECATED('favorites')}
        iconName='rocket'
        selectedIconName='rocket'
        accessibilityLabel="Blue Tab"
        selected={this.state.selectedTab === 'blueTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'blueTab',
          });
        }}>

        
        
        <NavigatorIOS
        style={styles.navigator}
        ref="nav2"
        initialRoute={{
          component: Page,
          title: "page title2 ",
          rightButtonTitle: 'New Invite 2',
          onRightButtonPress: () => {
            this.refs.nav2.navigator.push({
              title: "test",
              component: Page,
              passProps: {b:20, a:1},
              foo: "bar",
              rightButtonTitle: 'Cancel',
              onRightButtonPress: () => { this.refs.nav2.navigator.pop(); }
            });
          }
        }}>

        </NavigatorIOS>

        

      </TabBarItemIOS>
      <TabBarItemIOS
      accessibilityLabel="Red Tab"
      name="redTab"
      icon={_ix_DEPRECATED('history')}
      badgeValue={this.state.notifCount ? String(this.state.notifCount) : null}
      selected={this.state.selectedTab === 'redTab'}
      onPress={() => {
        this.setState({
          selectedTab: 'redTab',
          notifCount: this.state.notifCount + 1,
        });
      }}>
      <NavigatorIOS
      ref="nav"
      style={styles.navigator}
      initialRoute={{
        component: Page,
        title: "my title",
        rightButtonTitle: 'New Invite',
        onRightButtonPress: () => {
          this.refs.nav.navigator.push({
            title: "test",
            component: Page,
            rightButtonTitle: 'Cancel',
            onRightButtonPress: () => { this.refs.nav.navigator.pop(); }
          });}
        }}/>
        </TabBarItemIOS>
        </TabBarIOS>
        );
},

});

var styles = StyleSheet.create({

  navigator: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

// This is needed because the actual image may not exist as a file and
// is used by the native code to load a system image.
// TODO(nicklockwood): How can this fit our require system?
function _ix_DEPRECATED(imageUri) {
  return {
    uri: imageUri,
    isStatic: true,
  };
}

module.exports = TabBarExample;